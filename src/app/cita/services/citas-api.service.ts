import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CitasResponseModel } from '../models/cita.model';

@Injectable({
  providedIn: 'root'
})
export class CitasApiService {

  private citasURL = "http://localhost:3001/citas";

  constructor(private http: HttpClient) { }

  getCitasCiudadano(): Observable<CitasResponseModel> {
    return this.http.get<CitasResponseModel>(this.citasURL);
  }

}
