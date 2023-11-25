'use strict';

const express = require('express');
const router = express.Router();
const Reserva = require('../models/MisReservasModel');


router.get('/ListarReservas', (req, res) => {
    Reserva.find()
        .then((ListaReservasBD) => {
            res.json({
                resultado: true,
                msj: 'Los datos se obtuvieron de manera correcta',
                ListaReservasBD
            });
        })
        .catch((error) => {
            res.json({
                resultado: false,
                msj: 'No se pudo obtener la lista de personas, ocurrio el siguiente error: ',
                error
            });
        });
});

router.delete('/EliminarReserva', (req, res) => {
    let body = req.body;
    Reserva.deleteOne({ _id: body._id })
        .then((info) => {
            res.json({
                resultado: true,
                msj: 'Los datos se eliminaron de manera correcta',
                info
            });
        })
        .catch((error) => {
            res.json({
                resultado: false,
                msj: 'No se pudo eliminar la reserva, ocurrio el siguiente error: ',
                error
            });
        });
});
module.exports = router;