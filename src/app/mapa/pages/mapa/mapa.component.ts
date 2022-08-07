import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { MarcadorDistrito } from '../../interfaces/distritogis.interface';
import { DistritosService } from '../../services/distritos.service';
import { DistritoInfo } from './../../interfaces/distritoinfo.interface';

import * as mapboxgl from 'mapbox-gl';

// npm i --save-dev @types/mapbox-gl

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})

export class MapaComponent implements OnInit, AfterViewInit {

  // usando referencia local del html
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 4;
  // estableciendo un punto de referencia central
  centerMapa: [number, number] = [-73.087749, -9.8251183];

  marcador!: MarcadorDistrito;

  @Output() onDistrito: EventEmitter<DistritoInfo> = new EventEmitter();

  constructor(private distritosService: DistritosService) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.crearMapa();
    this.getMarcadores();
  }

  crearMapa() {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.centerMapa,
      zoom: this.zoomLevel
    });
  }

  getMarcadores() {
    this.distritosService.getDistritoGis()
      .subscribe(({ features }) => {
        features.forEach(
          feature => {
            const { codigo, nombre, cantidad } = feature.properties;
            this.marcador = {
              codigo,
              nombre,
              cantidad,
              coordenadas: feature.geometry.coordinates
            }
            this.agregarMarcador(this.marcador);
          })
      })
  }

  agregarMarcador(marcador: MarcadorDistrito) {
    const popupContent = document.createElement('div');
    popupContent.innerHTML = `
    <h4>${marcador.nombre}</h4>
    <h5>Cantidad: ${marcador.cantidad}</h5>`

    const buttonDetalle = document.createElement('div');
    buttonDetalle.innerHTML = `<button>Ver detalle</button>`
    popupContent.appendChild(buttonDetalle);

    let popup = new mapboxgl.Popup().setDOMContent(popupContent);

    buttonDetalle.addEventListener('click', () => {
      this.buscarDistrito(marcador);
      popup.remove();
    })

    new mapboxgl.Marker()
      .setLngLat([marcador.coordenadas[0], marcador.coordenadas[1]])
      .setPopup(popup)
      .addTo(this.mapa);
  }

  buscarDistrito(marcador: MarcadorDistrito) {
    this.distritosService.getDistritoInfo(marcador.codigo)
      .subscribe({
        next: resp => this.onDistrito.emit(resp),
        error: error => {
          // console.log(error);
          this.onDistrito.emit({
            propiedades: {
              codigo: marcador.codigo,
              nombre: marcador.nombre,
              cantidad: '0',
              urlImg: ""
            },
            listaNotaria: []
          })
        }
      })
  }

}
