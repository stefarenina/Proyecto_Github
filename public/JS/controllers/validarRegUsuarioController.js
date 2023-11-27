'use strict';

let nombre = document.getElementById('txtNombre');
let apellido = document.getElementById('txtApellido');
let correo = document.getElementById('txtCorreo');
let fechaNacimiento = document.getElementById('txtFechaNacimiento');
let documento = document.getElementById('sltDocumento');
let imagen = document.getElementById('placeFotos');
let contrasena = document.getElementById('txtPass');
let contrasena2 = document.getElementById('txtPass2');
let direccion = document.getElementById('txtDireccion');
let buttonSubmit = document.getElementById('btn-registro');

buttonSubmit.addEventListener('click',obtenerDatos);

function obtenerDatos(){
    let sNombre = nombre.value;
    let sApellido = apellido.value;
    let sCorreo = correo.value;
    let fechaNac = new Date(txtFechaNacimiento.value);
    let fechaActual = new Date();
    let sDocumento = documento.value;
    let imgFoto = foto.value;
    let sContrasena = contrasena.value;
    let sContrasena2 = contrasena2.value;
    let sDireccion = apellido.value;
    let imagen = document.getElementById('placeFotos');
    
    if(ValidarFormulario(sNombre,sApellido,sCorreo,fechaNac,fechaActual,sDocumento,imgFoto,sContrasena,sContrasena2,sDireccion) == false){
        return;
    }

}

const ValidarFormulario = (pNombre,pApellido,pCorreo,pFechaNac,pFechaActual,pDocumento,pImgFoto,pContrasena,pContrasena2,pDireccion) => {

    if (pNombre == '' || pNombre == null || pNombre == undefined){
        ImprimirMensajeError('Por favor ingrese el nombre.');
        return false;
    }
    if (pApellido == '' || pApellido == null || pApellido == undefined){
        ImprimirMensajeError('Por favor ingrese su apellido.');
        return false;
    }
    if (pCorreo == '' || pCorreo == null || pCorreo == undefined){
        ImprimirMensajeError('Por favor ingrese el correo.');
        return false;
    }
    if (pFechaNac >= pFechaActual){
        ImprimirMensajeError('La fecha ingresada debe ser menor a la fecha actual.');
        return false;
    }
    if (pDocumento === "" || pDocumento == null || pDocumento == undefined){
        ImprimirMensajeError('Por favor ingrese su documento de identidad.');
        return false;
    }
    if (pContrasena == '' || pContrasena == null || pContrasena == undefined){
        ImprimirMensajeError('Por favor ingrese su contraseña.');
        return false;
    }
    if (pContrasena2 == '' || pContrasena2 == null || pContrasena2 == undefined || pContrasena2 != pContrasena ){
        ImprimirMensajeError('Las contraseñas no coinciden.');
        return false;
    }
    if (pDireccion == '' || pDireccion == null || pDireccion == undefined) {
        ImprimirMensajeError('Por favor ingrese una direccion.');
        return false;
    } 

    if (pImgFoto == '' || pImgFoto == null || pImgFoto == undefined){
        ImprimirMensajeError('Debe de incluir su foto de perfil.');
        return false;
    }
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


// //
// function calcularEdad(fechaNac) {
//     const fechaNacimientoObj = new Date(fechaNac);

//     let edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();
//     return edad;
// }
