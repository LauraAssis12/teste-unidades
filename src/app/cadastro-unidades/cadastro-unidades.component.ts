import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-unidades',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './cadastro-unidades.component.html',
  styleUrls: ['./cadastro-unidades.component.css']
})
export class CadastroUnidadesComponent {
  unit: any = {
    cnes: '',
    razao_social: '',
    nome_fantasia: '',
    cnpj: '',
    telefone: '',
    email: '',
    endereco: ''
  };

  constructor(private http: HttpClient) {}

  submitForm() {
    this.http
      .post('https://apidadosabertos.saude.gov.br/cnes/estabelecimentos', this.unit)
      .subscribe({
        next: () => {
          alert('Unidade cadastrada com sucesso');
        },
        error: () => {
          alert('Erro ao cadastrar unidade.');
        }
      });
  }

  fetchAddress(cep: string) {
    this.http
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .subscribe({
        next: (data: any) => {
          this.unit.endereco = data.logradouro;
        },
        error: () => {
          alert('Endereço não encontrado');
        }
      });
  }
}
