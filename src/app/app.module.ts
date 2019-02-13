import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavFavsComponent } from './nav-favs/nav-favs.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule } from '@angular/material';
import { FormFilmsComponent } from './form-films/form-films.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormPodcastsComponent } from './form-podcasts/form-podcasts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormServicosComponent } from './form-servicos/form-servicos.component';
import { FormCadservicoComponent } from './form-cadservico/form-cadservico.component';


@NgModule({
  declarations: [
    AppComponent,
    NavFavsComponent,
    FormFilmsComponent,
    FormPodcastsComponent,
    FormServicosComponent,
    FormCadservicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
