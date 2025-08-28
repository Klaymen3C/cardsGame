"use strict";
// function ahoy(nombre: string): string {
//     return `Ahoy!, ${nombre}!`
// }
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(ahoy('Capitan'));
const barajaInicial_1 = require("./data/barajaInicial");
const jugador_1 = require("./players/jugador");
console.log('Tu baraja inicial es: ', barajaInicial_1.barajaInicial);
const Jugador1 = new jugador_1.Jugador('Capitan', barajaInicial_1.barajaInicial);
console.log(`Bienvenido al juego ${Jugador1.nombre}`);
console.log(`Aqui tiene su baraja `, Jugador1.baraja);
console.log(`Vida: ${Jugador1.vida}`);
