'use strict';

// Llamar diferentes routes 
const PersonaRoute = require("./PersonaRoute");

const ReservaPendienteRoute = require("./ReservaPendienteRoute");


const NegocioRoute = require("./NegocioRoute")
const MetodoRoute = require("./metodoPagoRoute")


module.exports = (app) => {
    app.use("/api/persona", PersonaRoute);
    app.use("/api/negocio", NegocioRoute)
    app.use("/api/metodo", MetodoRoute);



//Rutas no encontradas 404
    app.use((req, res) => {
        res.status(404);
        res.send({
            error: {
                status: 404,
                message: 'Ruta no encontrada'
            }
        });
    });

//Manejar errores
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.send({
            error: {
                status: err.status || 500,
                message: err.message
            }
        });
    });
}



/* //llamar ruta de Reservas Pendientes
module.exports = (app) => {
    app.use("/api", ReservaPendienteRoute);


//Rutas no encontradas 404
app.use((req, res) => {
    res.status(404);
    res.send({
        error: {
            status: 404,
            message: 'Ruta no encontrada'
        }
    });
});

//Manejar errores
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});
} */