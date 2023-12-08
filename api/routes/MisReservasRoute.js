'use strict';

const express = require('express');
const router = express.Router();
const Reserva = require('../models/MisReservasModel');

router.post('/RegistrarMisReservas', (req, res) => {
    let body = req.body;
    let nuevaReserva = new Reserva({
        Nombre: body.Nombre,
        FechaEntrada: body.FechaEntrada,
        FechaSalida: body.FechaSalida,
        CantidadHuespedes: body.CantidadHuespedes,
        Estado: body.Estado
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
                msj: 'No se pudo registrar el negocio, ocurrio el siguiente error: ',
                error
            });
        });
});

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

router.get('/BuscarReservaId', (req, res) => {
    let param = req.query;
    
    Reserva.findOne({
            _id: param._id
        })
        .then((Reserva_testDB) => {

            res.json({
                resultado: true,
                msj: 'Los datos se obtuvieron de manera correcta1',
                Reserva_testDB
            });
        })
        .catch((error) => {

            res.json({
                resultado: false,
                msj: 'No se pudo obtener la reserva, ocurrio el siguiente error: ',
                error
            });
        });
});

router.delete('/EliminarReserva', (req, res) => {
    let body = req.body;
    Reserva.deleteOne({
            _id: body._id
        })
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