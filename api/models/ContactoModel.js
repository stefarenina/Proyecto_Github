'use strict';

const mongoose = require('mongoose');
const schemaPersonaContacto = mongoose.Schema({
    Contacto: [
        {
            NombreContacto: {type: String, required: true, unique: false},
            EmailContacto: {type: String, required: true, unique: true},
            Descripcion: {type: String, required: true, unique: false}
        }
    ]
});

module.exports = mongoose.model('Persona', schemaPersonaContacto, 'Personas');