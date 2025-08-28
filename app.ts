

// function ahoy(nombre: string): string {
//     return `Ahoy!, ${nombre}!`
// }

// console.log(ahoy('Capitan'));

import { barajaInicial } from "./data/barajaInicial";
import { Jugador } from "./players/jugador";

console.log('Tu baraja inicial es: ', barajaInicial);


const Jugador1 = new Jugador('Capitan', barajaInicial);
console.log(`Bienvenido al juego ${Jugador1.nombre}`);
console.log(`Aqui tiene su baraja `, Jugador1.baraja);
console.log(`Vida: ${Jugador1.vida}`);



