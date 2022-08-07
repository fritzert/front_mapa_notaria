export interface DistritoInfo {
    propiedades: Propiedades;
    listaNotaria: Notaria[];
}

export interface Notaria {
    id: string;
    notariaId: number;
    nombreCompleto: string;
    departamento: string;
    provincia: string;
    distrito: string;
    distritoId: string;
    habilitado: boolean;
    estadoReapertura: string;
    fecInicioServicio: Date;
}

export interface Propiedades {
    codigo: string;
    nombre: string;
    cantidad: string;
    urlImg: string;
}
