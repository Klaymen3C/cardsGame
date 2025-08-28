"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atacar = atacar;
exports.destruirCarta = destruirCarta;
function atacar(atacante, defensor) {
    defensor.vida -= atacante.ataque;
    if (defensor.vida <= 0) {
        console.log(`${defensor.nombre} ha sido destruido`);
        return null;
    }
    return defensor;
}
function destruirCarta(cartaAtacante, cartaDefensora) {
}
