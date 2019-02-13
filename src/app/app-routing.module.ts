import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormFilmsComponent } from './form-films/form-films.component';
import { FormPodcastsComponent } from './form-podcasts/form-podcasts.component';
import { FormServicosComponent } from './form-servicos/form-servicos.component';
import { FormCadservicoComponent } from './form-cadservico/form-cadservico.component';

const routes: Routes = [
  {path: 'CadastrarServico', component: FormCadservicoComponent},  
  {path: 'Films', component: FormFilmsComponent},  
  {path: "ListaServicos", component: FormServicosComponent},
  {path: "Podcast", component: FormPodcastsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
