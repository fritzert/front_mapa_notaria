import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Notaria, Propiedades } from './../../interfaces/distritoinfo.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent {

  tableDataSource: MatTableDataSource<Notaria> = new MatTableDataSource<Notaria>([]);
  displayedColumns: string[] = ['notariaId', 'nombre', 'provincia', 'distrito', 'fecini'];

  // @ViewChild para capturar un elemento html de tipo MatPaginator
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  // @ViewChild para capturar un elemento html de tipo MatSort
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  @Input()
  propiedades!: Propiedades;

  existeNotarias: boolean = false;

  constructor() { }

  @Input() set notarias(data: Notaria[]) {
    this.existeNotarias = false;
    if (data.length > 0) {
      this.setTableDataSource(data);
      this.existeNotarias = true;
    }
  }

  // ngAfterViewInit(): void {
  //   this.tableDataSource.paginator = this.paginator;
  // }

  setTableDataSource(data: Notaria[]) {
    this.tableDataSource = new MatTableDataSource<Notaria>(data);
    this.tableDataSource.paginator = this.paginator;
    this.tableDataSource.sort = this.sort;
  }


}