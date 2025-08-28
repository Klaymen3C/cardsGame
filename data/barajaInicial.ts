

import { Carta, Baraja, Faccion, Efecto } from "../models/carta";

export const barajaInicial: Baraja = [
    {
        id: 1,
        nombre: 'Lobo',
        faccion: Faccion.Bestia,
        ataque: 3,
        vida: 2,
        coste: 2,
        efecto: Efecto.Ninguno
    },

    {
        id: 2,
        nombre: 'Cuervo',
        faccion: Faccion.Bestia,
        ataque: 2,
        vida: 1,
        coste: 1,
        efecto: Efecto.Volar
    },

    {
        id: 3,
        nombre: 'Esqueleto',
        faccion: Faccion.NoMuerto,
        ataque: 1,
        vida: 1,
        coste: 1,
        efecto: Efecto.Resucitar
    }
]

//FUNCIONES
