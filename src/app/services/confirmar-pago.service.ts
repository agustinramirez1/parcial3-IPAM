import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmarPagoService {
  private apiUrl = 'https://www.hostcatedral.com/api/appAranceles/public/pagarCuota';

  constructor(private http: HttpClient) {}

  registrarPago(contratoId: string, nroCuota: string, montoCuota: string): Observable<any> {
    const data = {
      contrato_id: contratoId,
      nro_cuota: nroCuota,
      monto_cuota: montoCuota,
    };
    console.log('Datos enviados para registrar el pago:', data); // Agregar este log para verificar los datos

    return this.http.post<any>(this.apiUrl, data).pipe(
      catchError((error) => {
        console.error('Error al registrar el pago:', error);
        throw error; // Lanza el error para que pueda ser manejado en el componente
      })
    );
  }
}
