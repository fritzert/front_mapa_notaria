import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

import { DistritoInfo, Notaria, Propiedades } from './../interfaces/distritoinfo.interface';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  notarias: Notaria[] = [];
  propiedades!: Propiedades;
  existeDistrito: boolean = false;

  constructor() { }

  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxToken;
  }

  mostrarNotarias({ propiedades, listaNotaria }: DistritoInfo) {
    this.existeDistrito = true;
    this.notarias = listaNotaria;
    this.propiedades = propiedades;
  }

}
