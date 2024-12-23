import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-unidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-unidades.component.html',
  styleUrls: ['./lista-unidades.component.css'],
  providers: [
    HttpClient
  ]
})
export class ListaUnidadesComponent {
  units: any[] = [];
  loading = true;
  filters = { cnes: '', NomeFantasia: '', cnpj: '' };

  constructor(private http: HttpClient, private router: Router) {
    this.fetchUnits();
  }

  fetchUnits() {
    this.loading = true;
    this.http
      .get('https://apidadosabertos.saude.gov.br/cnes/estabelecimentos')
      .subscribe({
        next: (data: any) => {
          console.log('Dados da API:', data); 
          this.units = data;
          this.loading = false;
        },
        error: () => {
          console.error('Erro ao buscar dados:');
          this.loading = false;
          alert('Erro ao carregar unidades.');
        },
      });
  }

  applyFilters() {
    this.units = this.units.filter(unit =>
      (this.filters.cnes ? unit.cnes.includes(this.filters.cnes) : true) &&
      (this.filters.NomeFantasia ? unit.nome_fantasia.includes(this.filters.NomeFantasia) : true) &&
      (this.filters.cnpj ? unit.cnpj.includes(this.filters.cnpj) : true)
    );
  }

  viewDetails(cnes: string) {
    this.router.navigate(['/infos', cnes]);
  }
}


