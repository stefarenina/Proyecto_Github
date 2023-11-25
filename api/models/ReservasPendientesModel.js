'use strict';

const mongoose = require('mongoose');
const schemaReservasPendientes = mongoose.Schema({
    FechaEntrada: { type: String, required: true, unique: false },
    FechaSalida: { type: String, required: true, unique: false },
    CantidadHuespedes: { type: Number, required: true, unique: false },
});

module.exports = mongoose.model('Reserva', schemaReservasPendientes, 'ReservasPendientes');