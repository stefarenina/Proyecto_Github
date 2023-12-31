'use strict';

const mongoose = require('mongoose');
const schemaNegocio = mongoose.Schema({
    NombreNegocio: { type: String, required: true, unique: true },
    Descripcion: { type: String, required: true, unique: false },
    Precio: { type: Number, required: true, unique: false },
    NumeroContacto: { type: Number, required: true, unique: false },
    Categoria: { type: String, required: true, unique: false },
    Direccion: { type: String, required: true, unique: false },
    FotosNegocio: { type: String, required: false, unique: false },
    Coordenadas: { type: String, required: true, unique: false },
    Dueño: { type: String, required: true, unique: false },
    Estado: { type: String, required: true, unique: false },
    inCart: { type: Boolean, default: false },
    Cantidad: { type: Number, required: false, unique: false, default: 0}
});

module.exports = mongoose.model('Negocio', schemaNegocio, 'Negocios');
