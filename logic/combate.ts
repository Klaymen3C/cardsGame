

import { Jugador } from "../players/jugador";
import { Carta } from "../models/carta";
import { Baraja } from "../models/carta";
import { log } from "console";

export interface ContextoCombate {
    atacante: Carta;
    defensor: Carta | null;
    dueñoAtacante: Jugador;
    dueñoDefensor: Jugador
}

//Resolver efecto
export function aplicarEfecto() {

}

//ARREGLA ESTO ESTUPIDA LA CARTA ATACANTE NO RECIBE DAÑO DE LA CARTA DEFENSORA
export function atacar(atacante: Carta, defensor: Carta | null, dueñoAtacante: Jugador, dueñoDefensor: Jugador): void {
    if (defensor) {
        defensor.vida -= atacante.ataque;
        defensor.vida = Math.max(0, defensor.vida);

        console.log(`${atacante.nombre} atacó a ${defensor.nombre}`);

        if (defensor.vida <= 0) {
            resolverCombate(defensor, dueñoDefensor);
        } else {
            console.log(`${defensor.nombre} quedó en ${defensor.vida} de vida`);
        }

    } else {
        //Si no hay defensor?
        ataqueDirecto(atacante, dueñoAtacante, dueñoDefensor);
    }


}

export function resolverCombate(carta: Carta, dueño: Jugador) {
    if (carta.vida) {
        carta.vida = 0;
        console.log(`${carta.nombre} ha sido destruido`);
        dueño.enviarAlCementerio(carta);

    } else {
        console.log(`${carta.nombre} quedó en ${carta.vida} de vida.`);

    }
}

export function ataqueDirecto(atacante: Carta, dueñoAtacante: Jugador, dueñoDefensor: Jugador): void {
    dueñoDefensor.vida -= atacante.ataque;
    console.log(`${dueñoAtacante.nombre} ataca directamente con ${atacante.nombre} causando ${atacante.ataque} de daño.`);
    console.log(`${dueñoDefensor.nombre} ahora tiene ${dueñoDefensor.vida} puntos de vida.`);
}

export function destruirCarta(cartaAtacante: Carta, cartaDefensora: Carta) {

}



//Resucitar -> Mover carta del cementerio al tablero


//Necromancia -> Robar carta del cementerio


//Exiliar -> Eliminar una carta del cementerio.

