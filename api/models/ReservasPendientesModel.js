'use strict';

const mongoose = require('mongoose');
const schemaReservasPendientes = mongoose.Schema({
    FechaEntrada: { type: Date, required: true, unique: false },
    FechaSalida: { type: Date, required: true, unique: false },
    CantidadHuespedes: { type: Number, required: true, unique: false },
});

module.exports = mongoose.model('Reserva', schemaReservasPendientes, 'ReservasPendientes');