import { Component } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { MascotasPorClienteService } from '../services/mascotas-por-cliente.service';
import {VacunasPorMascotaService } from '../services/vacunas-por-mascota.service';

import {ClientesResponse} from '../../app/interfaces/clientes'
import {MascotasPorClienteResponse} from '../../app/interfaces/mascotasPorCliente'
import {VacunasPorMascotaResponse} from '../../app/interfaces/vacunasPorMascota'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedMascotaID!: string;
  clientes: ClientesResponse[] = [];
  mascotas: MascotasPorClienteResponse[] = [];
  vacunas: VacunasPorMascotaResponse[] = [];

  constructor(
    private serviceClientes: ClientesService,
    private serviceMacostasPorCliente: MascotasPorClienteService,
    private serviceVacunasPorMascota: VacunasPorMascotaService
  ) {}

  onClienteChange(event: any) {
    const ClienteID: string = event.target.value;
    this.serviceMacostasPorCliente.getMascotas(ClienteID).subscribe((resp) => {
      this.mascotas = <MascotasPorClienteResponse[]>resp;
    });
  }

  onMascotaChange(event: any) {
    this.selectedMascotaID = event.target.value;
  }

  onClick() {
    if (this.selectedMascotaID) {
      this.serviceVacunasPorMascota.getVacunas(this.selectedMascotaID).subscribe((resp) => {
        console.log(this.selectedMascotaID + ' ola')
        this.vacunas = <VacunasPorMascotaResponse[]>resp;
        console.log(this.vacunas)
      });
    }
  }

  ngOnInit() {
    this.serviceClientes.getClientes().subscribe((resp) => {
      this.clientes = <ClientesResponse[]>resp;
    });
  }
}
