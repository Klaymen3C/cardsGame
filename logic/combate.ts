

import { Jugador } from "../players/jugador";
import { Carta } from "../models/carta";

export interface ContextoCombate {
    atacante: Carta;
    defensor: Carta | null;
    dueñoAtacante: Jugador;
    dueñoDefensor: Jugador
}

//Resolver efecto
export function aplicarEfecto() {

}

export function atacar(atacante: Carta, defensor: Carta | null, dueñoAtacante: Jugador, dueñoDefensor: Jugador): void {
    if (defensor) {
        defensor.vida -= atacante.ataque;
        atacante.vida -= defensor.ataque;

        defensor.vida = Math.max(0, defensor.vida);
        atacante.vida = Math.max(0, atacante.vida);

        console.log(`${atacante.nombre} atacó a ${defensor.nombre}`);

        if (defensor.vida <= 0) {
            console.log(`${defensor.nombre} ha sido destruido`);
            dueñoDefensor.enviarAlCementerio(defensor);
        } else {
            resolverCombate(defensor, dueñoDefensor)
        }

        if (atacante.vida <= 0) {
            console.log(`${atacante.nombre} ha sido destruido`);
            dueñoAtacante.enviarAlCementerio(atacante);
        } else {
            resolverCombate(atacante, dueñoAtacante)
        }

    } else {
        //Y si no hay una carta que defienda o la carta atacante tiene un efecto que le permita ignorar al defensor?
        ataqueDirecto(atacante, dueñoAtacante, dueñoDefensor);

    }


}

export function resolverCombate(carta: Carta, dueño: Jugador) {
    if (carta.vida = 0) {
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




//Resucitar -> Mover carta del cementerio al tablero
//Necromancia -> Robar carta del cementerio
//Exiliar -> Eliminar una carta del cementerio.

