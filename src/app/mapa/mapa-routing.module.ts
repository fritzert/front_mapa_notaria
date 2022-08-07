import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistritosComponent } from './pages/distritos/distritos.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'distritos', component: DistritosComponent },
            { path: '**', redirectTo: 'distritos' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MapaRoutingModule { }
