"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;
class Jugador {
    constructor(nombre, baraja, vida = 20) {
        this.mano = [];
        this.tablero = [];
        this.cementerio = [];
        this.nombre = nombre;
        this.vida = vida;
        this.baraja = [...baraja];
    }
    robarCarta() {
        if (this.baraja.length > 0) {
            const carta = this.baraja.shift();
            this.mano.push(carta);
            console.log(`${this.nombre} robó la carta ${carta.nombre}`);
        }
        else {
            console.log(`${this.nombre} no tiene mas cartas para robar`);
        }
    }
    jugarCarta(carta) {
        const indice = this.mano.indexOf(carta);
        if (indice !== -1) {
            this.tablero.push(carta);
            this.mano.splice(indice, 1);
            console.log(`${this.nombre} jugó la carta ${carta.nombre}`);
        }
        else {
            console.log(`La carta no está en la mano de ${this.nombre}`);
        }
    }
    enviarAlCementerio(carta) {
        const indice = this.mano.indexOf(carta);
        if (indice !== -1) {
            this.tablero.splice(indice - 1);
            this.cementerio.push(carta);
            console.log(`${carta.nombre} fue enviada al cementerio`);
        }
    }
    barajar(baraja) {
    }
}
exports.Jugador = Jugador;
