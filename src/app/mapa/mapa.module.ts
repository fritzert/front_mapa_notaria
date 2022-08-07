import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistritosComponent } from './pages/distritos/distritos.component';
import { MapaRoutingModule } from './mapa-routing.module';
import { PagesComponent } from './pages/pages.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MapaComponent } from './pages/mapa/mapa.component';
import { ListaComponent } from './pages/lista/lista.component';



@NgModule({
  declarations: [
    PagesComponent,
    DistritosComponent,
    MapaComponent,
    ListaComponent,
  ],
  imports: [
    CommonModule,
    MapaRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class MapaModule { }
