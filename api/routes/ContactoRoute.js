'use strict';
const express = require('express');
const router = express.Router();
const Persona = require('../models/ContactoModel');
const mailer = require('../templates/ContactoTemplate');

//Create 
router.post('/RegistrarPersonaContacto', (req, res) => {
    let body = req.body;
    let nuevaPersonaContacto = new Persona({
        NombreContacto: body.NombreContacto,
        EmailContacto: body.EmailContacto,
        Descripcion: body.Descripcion
    });

    nuevaPersonaContacto.save()
        .then((resultBD) => {
            res.json({
                resultado: true,
                msj: 'Registrado de manera correcta.',
                resultBD
            });

            let nombreCompleto = resultBD.NombreContacto;
            let correoContacto = resultBD.EmailContacto;
            mailer.EnviarEmail(nombreCompleto, correoContacto);
        })
        .catch((error) => {
            res.json({
                resultado: false,
                msj: 'No se pudo registrar la persona, ocurrio el siguiente error: ' + error.message,
                error
            });
        });
});

module.exports = router;