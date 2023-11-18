'use strict';

const express = require('express');
const router = express.Router();
const Reserva = require('../models/MisReservasModel');


router.put('/ModificarReserva', (req, res) => {
    let body = req.body;
    Reserva.updateOne({ _id: body._id }, {
        $set: body
        // $set: {
        //     Nombre: body.Nombre,
        //     Edad: body.Edad
        // }
    })
        .then((info) => {
            res.json({
                resultado: true,
                msj: 'Los datos se actualizaron de manera correcta',
                info
            });
        })
        .catch((error) => {
            res.json({
                resultado: false,
                msj: 'No se pudo actualizar la reserva, ocurrio el siguiente error: ',
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