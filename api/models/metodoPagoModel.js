'use strict';

const mongoose = require('mongoose');
const schemaNegocio = mongoose.Schema({
    NombreTarjeta: { type: String, required: true, unique: false },
    NumeroTarjeta: { type: Number, required: true, unique: true },
    FechaVencimiento: { type: String, required: true, unique: false },
    Cvv: { type: Number, required: true, unique: false },
});

module.exports = mongoose.model('MetodoPago', schemaNegocio, 'MetodosPago');
