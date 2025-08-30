"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aplicarEfecto = aplicarEfecto;
exports.atacar = atacar;
exports.resolverCombate = resolverCombate;
exports.ataqueDirecto = ataqueDirecto;
exports.destruirCarta = destruirCarta;
//Resolver efecto
function aplicarEfecto() {
}
//ARREGLA ESTO ESTUPIDA LA CARTA ATACANTE NO RECIBE DAÑO DE LA CARTA DEFENSORA
function atacar(atacante, defensor, dueñoAtacante, dueñoDefensor) {
    if (defensor) {
        defensor.vida -= atacante.ataque;
        defensor.vida = Math.max(0, defensor.vida);
        console.log(`${atacante.nombre} atacó a ${defensor.nombre}`);
        if (defensor.vida <= 0) {
            resolverCombate(defensor, dueñoDefensor);
        }
        else {
            console.log(`${defensor.nombre} quedó en ${defensor.vida} de vida`);
        }
    }
    else {
        //Si no hay defensor?
        ataqueDirecto(atacante, dueñoAtacante, dueñoDefensor);
    }
}
function resolverCombate(carta, dueño) {
    if (carta.vida) {
        carta.vida = 0;
        console.log(`${carta.nombre} ha sido destruido`);
        dueño.enviarAlCementerio(carta);
    }
    else {
        console.log(`${carta.nombre} quedó en ${carta.vida} de vida.`);
    }
}
function ataqueDirecto(atacante, dueñoAtacante, dueñoDefensor) {
    dueñoDefensor.vida -= atacante.ataque;
    console.log(`${dueñoAtacante.nombre} ataca directamente con ${atacante.nombre} causando ${atacante.ataque} de daño.`);
    console.log(`${dueñoDefensor.nombre} ahora tiene ${dueñoDefensor.vida} puntos de vida.`);
}
function destruirCarta(cartaAtacante, cartaDefensora) {
}
//Resucitar -> Mover carta del cementerio al tablero
//Necromancia -> Robar carta del cementerio
//Exiliar -> Eliminar una carta del cementerio.
