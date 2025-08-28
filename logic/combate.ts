

import { Jugador } from "../players/jugador";
import { Carta } from "../models/carta";
import { Baraja } from "../models/carta";

export function atacar(atacante: Carta, defensor: Carta): Carta | null {
    defensor.vida -= atacante.ataque;

    if (defensor.vida <= 0) {
        console.log(`${defensor.nombre} ha sido destruido`);
        return null;

    }
    return defensor;
}

export function destruirCarta(cartaAtacante: Carta, cartaDefensora: Carta) {

}

export function aplicarEfecto() {

}

//Resucitar -> Mover carta del cementerio al tablero


//Necromancia -> Robar carta del cementerio


//Exiliar -> Eliminar una carta del cementerio.

