'use strict';

const mongoose = require('mongoose');
const schemaMisReservas = mongoose.Schema({
    Nombre: { type: String, required: true, unique: false },
    FechaEntrada: { type: String, required: true, unique: false },
    FechaSalida: { type: String, required: true, unique: false },
    CantidadHuespedes: { type: Number, required: true, unique: false },
    Descripcion: { type: String, required: false, unique: false }
});

module.exports = mongoose.model('Reserva', schemaMisReservas, 'Reservas');