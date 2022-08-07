import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { DistritoGis } from '../interfaces/distritogis.interface';
import { DistritoInfo } from './../interfaces/distritoinfo.interface';

@Injectable({
  providedIn: 'root'
})
export class DistritosService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  // notarias/distritos
  getDistritoGis(): Observable<DistritoGis> {
    return this.http.get<DistritoGis>(`${this.baseUrl}/notarias/distritos`);
  }

  // notarias/distritos/{id}
  getDistritoInfo(id: string): Observable<DistritoInfo> {
    return this.http.get<DistritoInfo>(`${this.baseUrl}/notarias/distritos/${id}`);
  }


}
