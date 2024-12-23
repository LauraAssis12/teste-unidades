import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-infos-unidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-unidades.component.html',
  styleUrls: ['./info-unidades.component.css']
})

export class InfoUnidadesComponent {
  unit: any = {};
  loading = true;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.fetchDetails();
  }

  fetchDetails() {
    const cnes = this.route.snapshot.paramMap.get('cnes');
    if (cnes) {
      this.http
        .get(`https://apidadosabertos.saude.gov.br/cnes/estabelecimentos/${cnes}`)
        .subscribe({
          next: (data: any) => {
            this.unit = data;
            this.loading = false;
          },
          error: () => {
            this.loading = false;
            alert('Erro ao acessar dados da unidade');
          },
        });
    }
  }
}
