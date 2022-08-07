import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaRoutingModule } from './mapa/mapa-routing.module';

const routes: Routes = [
  {
    path: 'mapas',
    loadChildren: () => import('./mapa/mapa.module').then(m => m.MapaModule)
  },
  {
    path: '**',
    redirectTo: 'mapas'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MapaRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
