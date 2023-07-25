export interface AseguradoResponse {
    message: string;
    data:    Asegurado[];
}

export interface Asegurado {
    asegurado_id:     string;
    nro_documento:    string;
    nombre:           string;
    apellido:         string;
    fecha_nacimiento: Date;
    telefono:         string;
    email:            string;
    esta_activo:      string;
    plan_asegurado:   string;
}
