import { Component, Input } from '@angular/core';
import { Propiedades } from '../../interfaces/distritoinfo.interface';

@Component({
  selector: 'app-distritos',
  templateUrl: './distritos.component.html',
  styleUrls: ['./distritos.component.css']
})
export class DistritosComponent {

  @Input()
  propiedades!: Propiedades;

  existeDistrito: boolean = false;

  constructor() { }

}

