export interface CiudadanoModel {
    Id: number,
    nombre: string,
    apellidos: string,
    tipoIdentificacionId:number,
    documentoIdentidad:string,    
    fotografia: string,
    direccion: string,
    ciudadId: number,    
    celular: string,
    aceptaPolitica: boolean,    
    active: boolean
}

export interface CiudadanoResponseModel {
    code: number;
    message: string;
    error: boolean;
    _list: CiudadanoModel[];
}