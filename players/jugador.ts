

import { Carta, Baraja } from "../models/carta";

export class Jugador {
    nombre: string;
    vida: number;
    baraja: Baraja;
    mano: Carta[] = [];
    tablero: Carta[] = [];
    cementerio: Carta[] = [];

    constructor(nombre: string, baraja: Baraja, vida: number = 20) {
        this.nombre = nombre;
        this.vida = vida;
        this.baraja = [...baraja];
    }

    robarCarta(): void {
        if (this.baraja.length > 0) {
            const carta = this.baraja.shift()!;
            this.mano.push(carta);
            console.log(`${this.nombre} robó la carta ${carta.nombre}`);
        } else {
            console.log(`${this.nombre} no tiene mas cartas para robar`);
        }
    }

    jugarCarta(carta: Carta): void {
        const indice = this.mano.indexOf(carta);
        if (indice !== -1) {
            this.tablero.push(carta);
            this.mano.splice(indice, 1);
            console.log(`${this.nombre} jugó la carta ${carta.nombre}`);
        } else {
            console.log(`La carta no está en la mano de ${this.nombre}`);
        }
    }

    enviarAlCementerio(carta: Carta): void {
        const indice = this.tablero.indexOf(carta);
        if (indice !== -1) {
            this.tablero.splice(indice, 1);
            this.cementerio.push(carta);
            console.log(`${carta.nombre} fue enviada al cementerio`);

        }
    }

    barajar(baraja: Baraja) {

    }
}

