'use strict';

const express = require('express');
const router = express.Router();
const ReservaPendiente = require('../models/ReservasPendientesModel');

router.post('/RegistrarReservaPendiente', (req, res) => {
    let body = req.body;
    let nuevaReserva = new ReservaPendiente({
        Nombre: body.Nombre,
        FechaEntrada: body.FechaEntrada,
        FechaSalida: body.FechaSalida,
        CantidadHuespedes: body.CantidadHuespedes,
        Descripcion: body.Descripcion,
        Precio: body.Precio,
        FotosNegocio: body.FotosNegocio,
        Categoria: body.Categoria,
        PersonaID: body.PersonaID,
        Dias: body.Dias,
        Estado:body.Estado
    });

    nuevaReserva.save()
        .then((ReservaPendienteBD) => {
            res.json({
                resultado: true,
                msj: 'Registrado de manera correcta.',
                ReservaPendienteBD
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

router.get('/ListarReservasPendientes', (req, res) => {
    ReservaPendiente.find()
        .then((listaReservasPendientesBD) => {
            res.json({
                resultado: true,
                msj: 'Los datos se obtuvieron de manera correcta',
                listaReservasPendientesBD
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
router.get('/BuscarReservaPendienteId', (req, res) => {
    let param = req.query;

    ReservaPendiente.find({ PersonaID: param.PersonaID })
        .then((ReservaPendienteBD) => {
            res.json({
                resultado: true,
                msj: 'Los datos se obtuvieron de manera correcta',
                ReservaPendienteBD
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
router.delete('/EliminarReservasPendientes', (req, res) => {
    let body = req.body;
    ReservaPendiente.deleteOne({
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
                msj: 'No se pudo eliminar la reserva, ocurrió el siguiente error: ',
                error
            });
        });
});


router.put('/ModificarReserva', (req, res) => {
    let body = req.body;
    ReservaPendiente.updateMany({}, { $set: body })
        .then((info) => {
            console.log(info);
            res.json({
                resultado: true,
                msj: 'Se realizó el pago correctamente',
                info
            });
        })
        .catch((error) => {
            res.json({
                resultado: false,
                msj: 'No se pudo actualizar a la persona, ocurrió el siguiente error: ',
                error
            });
        });
});

module.exports = router;