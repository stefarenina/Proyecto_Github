'use strict';

const express = require('express');
const router = express.Router();
const Persona = require('../models/PersonaModel');

//CRUD
//Create
router.post('/RegistrarPersona', (req, res) => {
    let body = req.body;
    let nuevaPersona = new Persona({
        TipoIdentificacion: body.TipoIdentificacion,
        Identificacion: body.Identificacion,
        Nombre: body.Nombre,
        Apellidos: body.Apellidos,
        Sexo: body.Sexo,
        Nacimiento: body.Nacimiento,
        Estado: body.Estado,
        Email: body.Email,
        Password: body.Password,
        Rol: body.Rol,
        FotoPerfil: body.FotoPerfil
    });

    nuevaPersona.save()
        .then((resultBD) => {
            res.json({
                resultado: true,
                msj: 'Registrado de manera correcta.',
                resultBD
            });
        })
        .catch((error) => {
            console.log(error)
            console.log("naninimnji")
            res.json({
                resultado: false,
                msj: 'No se pudo registrar la persona, ocurrio el siguiente error: ',
                error
            
            });
        });
});
//Read
router.get('/ListarPersonas', (req, res) => {
    Persona.find()
        .then((ListaPersonasBD) => {
            res.json({
                resultado: true,
                msj: 'Los datos se obtuvieron de manera correcta',
                ListaPersonasBD
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
router.get('/BuscarPersonaIdentificacion', (req, res) => {
    let param = req.query;

    Persona.findOne({ Identificacion: param.Identificacion })
        .then((PersonaBD) => {
            res.json({
                resultado: true,
                msj: 'Los datos se obtuvieron de manera correcta',
                PersonaBD
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
router.get('/BuscarPersonaId', (req, res) => {
    let param = req.query;

    Persona.findOne({ _id: param._id })
        .then((PersonaBD) => {
            res.json({
                resultado: true,
                msj: 'Los datos se obtuvieron de manera correcta',
                PersonaBD
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
router.get('/AutenticarPersona', function (req, res) {
    console.log("hjarl")
    let params = req.query;
    Persona.findOne({
        Email: params.Email,
        Password: params.Password
    }).then((PersonaDB) => {
        console.log("hjasadsarl")
        console.log(PersonaDB)
        if (PersonaDB == null) {
            res.json({
                resultado: false,
                msj: 'Usuario y/o contraseña incorrectos',
                PersonaDB
            });
        } else if (Number(PersonaDB.Estado) == "inactivo") {
            res.json({
                resultado: false,
                msj: 'Usuario inactivo, por favor comuniquese con el administrador',
                PersonaDB
            });
        } else {
            res.json({
                resultado: true,
                msj: 'Persona autenticada correctamente',
                PersonaDB
            });
        }
    }).catch((error) => {
        res.json({
            resultado: false,
            msj: 'No se pudo obtener a la persona',
            error
        });
    });
});
//Update
router.put('/ModificarPersona', (req, res) => {
    let body = req.body;
    Persona.updateOne({ _id: body._id }, {
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
router.put('/InactivarPersona', (req, res) => {
    let body = req.body;
    Persona.updateOne({ _id: body._id }, {
        $set: {
            Estado: 0
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
router.delete('/EliminarPersona', (req, res) => {
    let body = req.body;
    Persona.deleteOne({ _id: body._id })
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