'use strict';


let correo = document.getElementById('txtEmail');
let password = document.getElementById('txtPass');
let buttonSubmit = document.getElementById('btnIniciar');

const obtenerDatos=()=>{
    let sCorreo = correo.value;
    let sPassword = password.value;

    if(ValidarInicio(sCorreo,sPassword)){
        return;
    }

}
buttonSubmit.addEventListener('click',obtenerDatos);
const ValidarInicio = (pCorreo, pPassword) => {
    
    if (pCorreo == '' || pCorreo == null || pCorreo == undefined){
        ImprimirMensajeError('Debe digitar su correo.');
        return false;
    }
        
    if (pPassword == '' || pPassword == null || pPassword == undefined){
        ImprimirMensajeError('Digite su contraseña.');
        return false;
    }
    window.location.href="./landingProducto.html";
    return true;

}

const ImprimirMensajeError = (pMensaje) => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: pMensaje,
        confirmButtonText: 'Ok'
    });
};

