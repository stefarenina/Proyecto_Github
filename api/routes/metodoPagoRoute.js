'use strict';

const express = require('express');
const router = express.Router();
const Metodo = require('../models/metodoPagoModel');


router.post('/RegistrarMetodo', (req, res) => {
    let body = req.body;
    let nuevoMetodo = new Metodo({
        NombreTarjeta: body.NombreTarjeta,
        NumeroTarjeta: body.NumeroTarjeta,
        FechaVencimiento: body.FechaVencimiento,
        Cvv: body.Cvv,
    });

    nuevoMetodo.save()
        .then((resultBD) => {
            res.json({
                resultado: true,
                msj: 'Registrado de manera correcta.',
                resultBD
            });
        })
        .catch((error) => {
            res.json({
                resultado: false,
                msj: 'No se pudo registrar el metodo, ocurrio el siguiente error: ',
                error
            });
        });
});

module.exports = router;