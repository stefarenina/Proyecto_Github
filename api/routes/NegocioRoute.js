'use strict';

const express = require('express');
const router = express.Router();
const Negocio = require('../models/NegocioModel');

//Create
router.post('/RegistrarNegocio', (req, res) => {
    let body = req.body;
    let nuevoNegocio = new Negocio({
        NombreNegocio: body.NombreNegocio,
        Descripcion: body.Descripcion,
        Precio: body.Precio,
        NumeroContacto: body.NumeroContacto,
        Categoria: body.Categoria,
        Direccion: body.Direccion,
        FotosNegocio: body.FotosNegocio,
        Coordenadas: body.Coordenadas,
        Estado: body.Estado

    });

    nuevoNegocio.save()
        .then((resultBD) => {
            res.json({
                resultado: true,
                msj: 'Negocio registrado de manera correcta.',
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

//Read
router.get('/ListarNegocios', (req, res) => {
    Negocio.find()
        .then((listaNegociosBD) => {
            res.json({
                resultado: true,
                msj: 'Los datos se obtuvieron de manera correcta',
                listaNegociosBD
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
router.get('/BuscarNegocioId', (req, res) => {
    let param = req.query;
    Negocio.findOne({ _id: param._id })
        .then((NegocioBD) => {
            console.log("jijiji")
            res.json({
                resultado: true,
                msj: 'Los datos se obtuvieron de manera correcta',
                NegocioBD
            });
        })
        .catch((error) => {
            console.log("jijojo")
            res.json({
                resultado: false,
                msj: 'No se pudo obtener el negocio, ocurrio el siguiente error: ',
                error
            });
        });
});

//Update
router.put('/ModificarNegocio', (req, res) => {
    let body = req.body;
    Negocio.updateOne({ _id: body._id }, {
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
                msj: 'No se pudo actualizar a la persona, ocurrio el siguiente error: ',
                error
            });
        });
});
router.put('/DesactivarNegocio', (req, res) => {
    let body = req.body;
    Negocio.updateOne({ _id: body._id }, {
        $set: {
            Estado: "desactivado"
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
router.put('/ActivarNegocio', (req, res) => {
    let body = req.body;
    Negocio.updateOne({ _id: body._id }, {
        $set: {
            Estado: "activado"
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

//Delete
router.delete('/EliminarNegocio', (req, res) => {
    let body = req.body;
    Negocio.deleteOne({ _id: body._id })
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
                msj: 'No se pudo eliminar a la persona, ocurrio el siguiente error: ',
                error
            });
        });
});

module.exports = router;