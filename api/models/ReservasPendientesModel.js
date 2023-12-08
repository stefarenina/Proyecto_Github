'use strict';

const mongoose = require('mongoose');
const schemaReservasPendientes = mongoose.Schema({
    Nombre: { type: String, required: false, unique: false },
    FechaEntrada: { type: String, required: true, unique: false },
    FechaSalida: { type: String, required: true, unique: false },
    CantidadHuespedes: { type: Number, required: true, unique: false },
    Descripcion: { type: String, required: false, unique: false },
    Precio: { type: Number, required: true, unique: false },
    FotosNegocio: { type: String, required: false, unique: false },
    Categoria: { type: String, required: false, unique: false },
    PersonaID: { type: String, required: true, unique: false },
    Dias: { type: Number, required: true, unique: false },
    Estado: { type: Boolean, default: false }
});

module.exports = mongoose.model('ReservaPendiente', schemaReservasPendientes, 'ReservasPendientes');