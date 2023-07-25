import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AseguradoService {

  constructor(private http:HttpClient) { }

  getAsegurado(nroDocumento: string){
    return this.http.get(`https://www.hostcatedral.com/api/appAranceles/public/getAsegurado/${nroDocumento}`)
  }
}
