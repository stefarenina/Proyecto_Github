'use strict';

const mongoose = require('mongoose');
const schemaNegocio = mongoose.Schema({
    NombreNegocio: { type: String, required: true, unique: true },
    Descripcion: { type: String, required: true, unique: false },
    NumeroContacto: { type: Number, required: true, unique: false },
    Categoria: { type: Number, required: true, unique: false },
    Direccion: { type: String, required: true, unique: false },
    FotosNegocio: { type: String, required: false, unique: false }
});

module.exports = mongoose.model('Negocio', schemaNegocio, 'Negocios');
