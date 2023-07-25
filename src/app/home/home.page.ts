import { Component } from '@angular/core';
import { AseguradoService } from '../services/asegurado.service';
import { CuotasPendientesService } from '../services/cuotas-pendientes.service';
import { ConfirmarPagoService } from '../services/confirmar-pago.service' 
import { AseguradoResponse, Asegurado } from '../interfaces/asegurado';
import { CuotasResponse, Cuotas } from '../interfaces/CuotasPendientes';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nroDocumento: string = '';
  asegurado: Asegurado[] = [];
  cuotasPendientes: Cuotas[] = [];

  contratoId: string | undefined;
  nroCuota: string | undefined;
  montoCuota: string | undefined;

  constructor(private serviceAsegurado: AseguradoService,
    private serviceCuotasPendientes: CuotasPendientesService,
    private confirmarPagoService: ConfirmarPagoService
  ) { }

  onClick() {
    if (this.nroDocumento) {
      this.serviceAsegurado.getAsegurado(this.nroDocumento).subscribe(
        (resp: any) => {
          this.asegurado = resp.data;
          console.log(this.asegurado);

          if (this.asegurado.length > 0) {
            const aseguradoID = this.asegurado[0].asegurado_id;
            this.getCuotasPendientes(aseguradoID);
          }
        },
        (error) => {
          console.error('Error al obtener el asegurado:', error);
        }
      );
    }
  }

  getCuotasPendientes(aseguradoID: string) {
    if (this.asegurado.length > 0) {
      const aseguradoID = this.asegurado[0].asegurado_id;
      this.serviceCuotasPendientes.getCuotasPendientes(aseguradoID).subscribe(
        (data: any) => {
          this.cuotasPendientes = data.data;
          console.log(this.cuotasPendientes)
        },
        (error) => {
          console.error('Error al obtener las cuotas pendientes:', error);
        }
      );
    }
  }

  confirmarPago() {
    console.log('Contrato ID:', this.contratoId);
    console.log('Número de Cuota:', this.nroCuota);
    console.log('Monto de Cuota:', this.montoCuota);
    if (this.asegurado && this.cuotasPendientes) {
      
      const contratoId = this.asegurado[0].asegurado_id;
      const nroCuota = this.cuotasPendientes[0].nro_cuota; 
      const montoCuota = this.cuotasPendientes[0].monto_cuota; 
      
      const confirmacion = confirm(
        `¿Seguro que quiere confirmar el pago con ID: ${contratoId}, Cuota Número: ${nroCuota}, Monto de Cuota: ${montoCuota}?`
      );

      if (confirmacion) {
        
        this.confirmarPagoService
          .registrarPago(contratoId, nroCuota?.toString(), montoCuota?.toString())
          .subscribe(
            (response) => {
              
              alert('¡Pago realizado exitosamente!');
              console.log('Pago registrado:', response);
            },
            (error) => {
              
              console.error('Error al realizar el pago:', error);
              alert(
                'Ocurrio un error en el pago. Por favor, inténtalo de nuevo más tarde.'
              );
            }
          );
      } else {
        
      }
    }
  }
}
