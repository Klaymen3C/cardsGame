

export enum Faccion {
    Bestia = 'Bestia',
    NoMuerto = 'NoMuerto',
    Robot = 'Robot',
    Naturaleza = 'Naturaleza'
}

export enum Efecto {
    Volar = 'Volar',
    AtaqueDoble = 'Ataque Doble',
    Resucitar = 'Resucitar',
    Ninguno = 'Ninguno'
}

export interface Carta {
    id: number;
    nombre: string;
    faccion: Faccion;
    ataque: number;
    vida: number;
    coste: number;
    efecto?: Efecto;
}

export type Baraja = Carta[];