export interface CitaModel {
    nombreMedico: string;
    documentoIdentidadMedico: string;
    apellidosMedico: string;
    ciudadIdMedico: number;
    tipoIdentificacionIdMedico: number;
    activeMedico: boolean;
    IdMedico: number;
    createdAtMedico: Date;
    updateAtMedico: Date;
    nombreCiudadano: string;
    Id: number;
    documentoIdentidad: string;
    apellidos: string;
    fotografia: string;
    direccion: string;
    celular: string;
    aceptaPolitica: boolean;
    active: boolean;
    ciudadId: number;
    tipoIdentificacionId: number;
    createdAt: Date;
    updatedAt: Date;
    nombreCiudad: string;
    descripcion: string;
    fechaHora: Date;
    aceptaCancelacion: boolean;
    estado: string;
    tipoCita: string;
    ciudadanoId: number;
    medicoId: number;
}

export interface CitasResponseModel {
    code: number;
    message: string;
    error: boolean;
    _list: CitaModel[];
}