"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.barajaInicial = void 0;
const carta_1 = require("../models/carta");
exports.barajaInicial = [
    {
        id: 1,
        nombre: 'Lobo',
        faccion: carta_1.Faccion.Bestia,
        ataque: 3,
        vida: 2,
        coste: 2,
        efecto: carta_1.Efecto.Ninguno
    },
    {
        id: 2,
        nombre: 'Cuervo',
        faccion: carta_1.Faccion.Bestia,
        ataque: 2,
        vida: 1,
        coste: 1,
        efecto: carta_1.Efecto.Volar
    },
    {
        id: 3,
        nombre: 'Esqueleto',
        faccion: carta_1.Faccion.NoMuerto,
        ataque: 1,
        vida: 1,
        coste: 1,
        efecto: carta_1.Efecto.Resucitar
    }
];
//FUNCIONES
