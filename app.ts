

// function ahoy(nombre: string): string {
//     return `Ahoy!, ${nombre}!`
// }

// console.log(ahoy('Capitan'));

import { barajaInicial } from "./data/barajaInicial";
import { atacar } from "./logic/combate";
import { Enemigo } from "./players/enemigo";
import { Jugador } from "./players/jugador";

// console.log('Tu baraja inicial es: ', barajaInicial);


const capitan = new Jugador('Capitan', barajaInicial);
console.log(`Bienvenido al juego ${capitan.nombre}!`);
//console.log(`Vida: ${capitan.vida}`);
//console.log(`Aqui tiene su baraja `, capitan.baraja);

const ezio = new Jugador('Ezio', barajaInicial);
console.log(`Hola ${ezio.nombre}!`);
//console.log(`Esta es tu baraja: `, ezio.baraja);

console.log('_________TOMEN SUS CARTAS_________');

capitan.robarCarta();
ezio.robarCarta();

const cartaJ1 = capitan.mano[0];
const cartaJ2 = ezio.mano[0];
capitan.jugarCarta(cartaJ1);
ezio.jugarCarta(cartaJ2);

console.log('_________COMIENZA EL COMBATE_________');
atacar(cartaJ1, cartaJ2, capitan, ezio);
console.log('Tablero del Capitan', capitan.tablero.map(c => c.nombre));
console.log('Cementerio del Capitan', capitan.cementerio.map(c => c.nombre));
console.log('Tablero del ezio', ezio.tablero.map(c => c.nombre));
console.log('Cementerio del ezio', ezio.cementerio.map(c => c.nombre));





