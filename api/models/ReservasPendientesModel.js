'use strict';

const mongoose = require('mongoose');
const schemaReservasPendientes = mongoose.Schema({
    Nombre: { type: String, required: false, unique: false },
    FechaEntrada: { type: String, required: true, unique: false },
    FechaSalida: { type: String, required: true, unique: false },
    CantidadHuespedes: { type: Number, required: true, unique: false },
    Descripcion: { type: String, required: false, unique: false },
    Precio: { type: Number, required: true, unique: false }
});

module.exports = mongoose.model('Reserva', schemaReservasPendientes, 'ReservasPendientes');