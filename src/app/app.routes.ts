import { ListaUnidadesComponent } from './lista-unidades/lista-unidades.component';
import { InfoUnidadesComponent } from './info-unidades/info-unidades.component';
import { CadastroUnidadesComponent } from './cadastro-unidades/cadastro-unidades.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: ListaUnidadesComponent },
    { path: 'infos/:cnes', component: InfoUnidadesComponent },
    { path: 'cadastro', component: CadastroUnidadesComponent },

];


