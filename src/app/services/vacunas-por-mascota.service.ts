import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class VacunasPorMascotaService {

  constructor(private http:HttpClient) { }

  getVacunas(MascotaID: string){
    const url = `https://www.hostcatedral.com/api/appCatalogoLibro/public/getVacunasPorMascota/${MascotaID}`;
    console.log(url)
    return this.http.get(url)
  }
}
