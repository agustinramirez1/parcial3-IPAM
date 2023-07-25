export interface CuotasResponse {
    message: string;
    data:    Cuotas[];
}

export interface Cuotas {
    contrato_cuota_id:     string;
    contrato_id:    string;
    nro_cuota:           number;
    fecha_vencimiento:         Date;
    monto_cuota: number;
    saldo:         number;
}