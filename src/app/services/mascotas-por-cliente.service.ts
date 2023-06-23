import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MascotasPorClienteService {

  constructor(private http:HttpClient) { }

  getMascotas(ClienteID: string) {
    const url = `https://www.hostcatedral.com/api/appCatalogoLibro/public/getMascotasPorCliente/${ClienteID}`;
    return this.http.get(url);
  }
}
