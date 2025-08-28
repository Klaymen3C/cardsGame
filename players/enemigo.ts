
import { Jugador } from "./jugador";
import { atacar } from "../logic/combate";
import { Carta, Baraja } from "../models/carta";

//export class Enemigo {
//re: string;
//: number;
//ja: Baraja;
//: Carta[] = [];
//ero: Carta[] = [];
//nterio: Carta[] = [];
//
//tructor(nombre: string, baraja: Baraja, vida: number = 20) {
//this.nombre = nombre;
//this.vida = vida;
//this.baraja = [...baraja];
//
//
//rCarta(): void {
//if(this.baraja.length > 0) {
//const carta = this.baraja.shift()!;
//this.mano.push(carta);
//console.log(`${this.nombre} robó la carta ${carta.nombre}`);
//se {
//console.log(`${this.nombre} no tiene mas cartas para robar`);
//
//}
//
//rCarta(carta: Carta): void {
//const indice = this.mano.indexOf(carta);
//if(indice !== -1) {
//this.tablero.push(carta);
//this.mano.splice(indice, 1);
//console.log(`${this.nombre} jugó la carta ${carta.nombre}`);
//se {
//console.log(`La carta no está en la mano de ${this.nombre}`);
//
//}
//
//arAlCementerio(carta: Carta): void {
//const indice = this.mano.indexOf(carta);
//if(indice !== -1) {
//this.tablero.splice(indice - 1);
//this.cementerio.push(carta);
//console.log(`${carta.nombre} fue enviada al cementerio`);
//
//
//}
//}

export class Enemigo extends Jugador {
    tomarTurno(): void {
        console.log(`${this.nombre} está pensando su jugada...`);

        if (this.mano.length > 0) {
            this.jugarCarta(this.mano[0]);
        } else {
            this.robarCarta();
        }
    }


}


