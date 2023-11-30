'use strict';

const mongoose = require('mongoose');

const schemaCart = mongoose.Schema({
    Nombre: { type: String, required: true, unique: true },
    Descripcion: { type: String, required: true, unique: false },
    Precio: { type: Number, required: true, unique: false },
    FotosNegocio: { type: String, required: false, unique: false },
});

module.exports = mongoose.model('reserva-cart', schemaCart, 'Reservas-Cart');