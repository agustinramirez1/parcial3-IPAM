import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuotasPendientesService {

  constructor(private http:HttpClient) { }

  getCuotasPendientes(AseguradoID: string) {
    const url = `https://www.hostcatedral.com/api/appAranceles/public/getCuotasPendientes/${AseguradoID}`;
    return this.http.get(url);
  }
}
