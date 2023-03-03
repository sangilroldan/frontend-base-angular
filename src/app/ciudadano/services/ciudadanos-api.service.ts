import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CiudadanoResponseModel } from '../models/ciudadano.model';
import { Subject, tap } from 'rxjs';
import { enviroment } from '../../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CiudadanosApiService {

  private ciudadanosURL = enviroment.URL_CIUDADANOS;

  private _refreshrequired = new Subject<void>();

  get Refreshrequired() {
    return this._refreshrequired;
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  getCiudadanos(): Observable<CiudadanoResponseModel> {
    return this.http.get<CiudadanoResponseModel>(this.ciudadanosURL);
  }

  saveCiudadano(inputData: any) {
    return this.http.post(this.ciudadanosURL, inputData);
  }
}
