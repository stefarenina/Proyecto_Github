'use strict';

let inputNombreTarjeta = document.getElementById('nombre_tarjeta');
let inputNumeroTarjeta = document.getElementById('numero_tarjeta');
let inputFechaVencimiento = document.getElementById('fecha_vencimiento');
let Cvv = document.getElementById('cvv');


let sesion;
let _id;


const GetData = async () => {
    sesion = GetSesionActiva();
    _id = sesion._id;

};

GetData();
const RegistrarMetodo = async () => {
    console.log("HUIHIHJ") 
    let nombreTarjeta = inputNombreTarjeta.value;
    let numeroTarjeta = inputNumeroTarjeta.value;
    let fechaVencimiento = inputFechaVencimiento.value;
    console.log(inputFechaVencimiento)
    console.log(fechaVencimiento)
    let cvv = Cvv.value;

    let res = null;
    let dataBody = {
        'NombreTarjeta': nombreTarjeta,
        'NumeroTarjeta': numeroTarjeta,
        'FechaVencimiento': fechaVencimiento,
        'Cvv': cvv,
        'Dueño': _id
    };
    console.log(dataBody)
    // Se realiza el registro de la persona
    res = await ProcessPOST('RegistrarMetodo', dataBody, null);

    if (res == null || res == undefined) {
        ImprimirMsjsError('Ocurrió un error inesperado');
    } else if (res.resultado == false) {
        ImprimirMsjsError(res.msj);
        console.log(res.error)
    } else {
        swal.fire({
            icon: 'success',
            title: '¡Registro exitoso!',
            text: res.msj,
            confirmButtonText: 'Ok'
        }).then(resSwetAlert => {
            // Puedes redirigir al usuario a la página que desees después del registro exitoso.
            // Por ejemplo, puedes redirigirlo a la página de inicio.
            location.href = 'perfil.html';
        });
    }
};


//buttonSubmit.addEventListener('click', RegistrarNegocio);
