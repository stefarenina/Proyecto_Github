'use strict'

let nombre = document.getElementById('txtNombre');
let apellido = document.getElementById('txtApellido');
let correo = document.getElementById('txtCorreo');
let fechaNacimiento = document.getElementById('txtFechaNacimiento');
let documento = document.getElementById('sltDocumento');
let foto = document.getElementById('myphoto');
let contrasena = document.getElementById('txtPass');
let contrasena2 = document.getElementById('txtPass2');
let direccion = document.getElementById('imgNegocio');



const ValidarFormulario = () => { // obtenemos los valores de cada elemento.
    let usuario = nombre.value;
    let apellidoU = apellido.value;
    let correoU = correo.value;
    let contrasenaU = contrasena.value;
    let contrasena2U = contrasena2.value;
    let direccionU = direccion.value;
    let fotoperf = foto.value;
    

    //Validamos los campos si estan vacios le damos una alerta.
    if (usuario == '' || usuario == null || usuario == undefined ||
        apellidoU == '' || apellidoU == null || apellidoU == undefined ||
        correoU == '' || correoU == null || correoU == undefined ||
        contrasenaU == '' || contrasenaU == null || contrasenaU == undefined ||
        contrasena2U == '' || contrasena2U == null || contrasena2U == undefined ||
        direccionU == '' || direccionU == null || direccionU == undefined) {
        ImprimirMensajeError('Todos los campos son obligatorios.');
    } 

    if (fotoperf == '' || fotoperf == null || imfotoperfNegocio == undefined){
        ImprimirMensajeError('Debe de incluir su foto de perfil.');
    }

    radio.forEach(element => {
        if (element.checked == true) {
            contadorRadio++;
        } 
    });

    if (contadorRadio < 1) {
        ImprimirMensajeError('Debera elegir al menos 1 opcion');
    }
};


buttonSubmit.addEventListener('click', ValidarFormulario);

//Aqui estamo generando una funcion que va a generar las alertas, modulamos esta funcion con las demas.
const ImprimirMensajeError = (texto) => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: texto
    });

};