'use strict';

let correo = document.getElementById('txtEmail');
let password = document.getElementById('txtPass');
let buttonSubmit = document.getElementById('btnIniciar');

let modal=document.getElementById('modalInicio');
let span=document.getElementById('close');

span.onclick =()=>{
    CerrarModal();
}
buttonSubmit.addEventListener('click',obtenerDatos);

const obtenerDatos=()=>{
    let sCorreo = correo.value;
    let sPassword = password.value;

    if(ValidarInicio(sCorreo,sPassword)){
        return;
    }

}

const ValidarInicio = (pCorreo, pPassword) => {
    
    if (pCorreo == '' || pCorreo == null || pCorreo == undefined){
        ImprimirMensajeError('Debe digitar su correo.');
        return false;
    }
        
    if (pPassword == '' || pPassword == null || pPassword == undefined){
        ImprimirMensajeError('Digite su contraseña.');
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

const AbrirModalInicio=()=>{
        modal.style.display = "block";
    }

function CerrarModal(){
    modal.style.display= "none";
}
