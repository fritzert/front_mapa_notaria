export interface DistritoGis {
    type: string;
    features: Feature[];
}

export interface Feature {
    type: string;
    properties: Properties;
    geometry: Geometry;
}

export interface Properties {
    codigo: string;
    nombre: string;
    cantidad: string;
}

export interface Geometry {
    type: string;
    coordinates: number[];
}

export interface MarcadorDistrito {
    codigo: string,
    nombre: string,
    cantidad: string,
    coordenadas: number[]
}