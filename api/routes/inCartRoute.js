'use strict';

const express = require('express');
const router = express.Router();
const ReservaInCart = require('../models/NegocioModel');


router.put('/AgregarReservaCart', (req, res) => {
    let body = req.body;
    ReservaInCart.updateOne({
            _id: body._id
        }, {
            $set: {
                inCart: true
            }
        })
        .then((info) => {
            res.json({
                resultado: true,
                msj: 'La reserva se agrego de manera correcta al carrito',
                info
            });
        })
        .catch((error) => {
            res.json({
                resultado: false,
                msj: 'No se pudo agregar la reserva, ocurrio el siguiente error: ',
                error
            });
        });
});

module.exports = router;