'use strict';

const express = require('express');
const router = express.Router();
const Reserva = require('../models/ReservasPendientesModel');

router.post('/RegistrarReserva', (req, res) => {
    let body = req.body;
    let nuevaReserva = new Reserva({
        FechaEntrada: body.FechaEntrada,
        FechaSalida: body.FechaSalida,
        CantidadHuespedes: body.CantidadHuespedes
    });

    nuevaReserva.save()
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
                msj: 'No se pudo registrar la reserva, ocurrio el siguiente error: ',
                error
            });
        });
});

module.exports = router;