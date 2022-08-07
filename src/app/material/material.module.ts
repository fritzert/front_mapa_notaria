import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
