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

router.put('/EliminarReservaCart', (req, res) => {
    let body = req.body;
    ReservaInCart.updateOne({
            _id: body._id
        }, {
            $set: {
                inCart: false
            }
        })
        .then((info) => {
            res.json({
                resultado: true,
                msj: 'La reserva se elimino de manera correcta del carrito',
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

router.get('/ListarNegociosInCart', (req, res) => {
    ReservaInCart.find({inCart: true})
        .then((listaNegociosinCartBD) => {
            res.json({
                resultado: true,
                msj: 'Los datos se obtuvieron de manera correcta',
                listaNegociosinCartBD
            });
        })
        .catch((error) => {
            res.json({
                resultado: false,
                msj: 'No se pudo obtener la lista de negocios, ocurrio el siguiente error: ',
                error
            });
        });
});

router.put('/LimpiarCart', (req, res) => {
    ReservaInCart.updateMany({
            inCart: true
        }, {
            $set: {
                inCart: false
            }
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
                msj: 'No se pudo actualizar a la persona, ocurrio el siguiente error: ',
                error
            });
        });
});

router.put('/AumentarNumeroCart', (req, res) => {
    let body = req.body;
    ReservaInCart.updateOne({
            _id: body._id
        }, {
            $set: {
                Cantidad: 1
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

router.put('/DisminuirNumeroCart', (req, res) => {
    let body = req.body;
    ReservaInCart.updateOne({
            _id: body._id
        }, {
            $set: {
                Cantidad: 0
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