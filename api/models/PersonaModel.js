'use strict';

const mongoose = require('mongoose');
const schemaPersona = mongoose.Schema({
    TipoIdentificacion: { type: String, required: true, unique: false },
    Identificacion: { type: String, required: true, unique: true },
    Nombre: { type: String, required: true, unique: false },
    Apellidos: { type: String, required: true, unique: false },
    Sexo: { type: String, required: true, unique: false },
    Nacimiento: { type: String, required: true, unique: false },
    Direccion: { type: String, required: true, unique: false },
    Estado: { type: String, required: true, unique: false },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true, unique: false },
    Rol: { type: String, required: true, unique: false },
    FotoPerfil: { type: String, required: false, unique: false }
});

module.exports = mongoose.model('Persona', schemaPersona, 'Personas');
