'use strict';

let nombre = document.getElementById('txtEmpresa');
let descripcion = document.getElementById('txtDescripcion');
let telefono = document.getElementById('telNumber');
let imgNegocio = document.getElementById('imgNegocio');
let direccion = document.getElementById('txtDireccion');
let radio = document.querySelectorAll('.rbtCategoria');
let buttonSubmit = document.getElementById('btnReg');
let imagen = document.getElementById('imgNegocio');



const ValidarFormulario = () => { // obtenemos los valores de cada elemento.
    let empresa = nombre.value;
    let telEmpresa = telefono.value;
    let direccionF = direccion.value;
    let descripcionF = descripcion.value;
    let imgNegocio = imagen.value;
    let contadorRadio = 0;
    

    //Validamos los campos si estan vacios le damos una alerta.
    if (empresa == '' || empresa == null || empresa == undefined || telEmpresa == '' ||
        telEmpresa == null || telEmpresa == undefined || direccionF == '' || direccionF == null || direccionF == undefined || descripcionF == '' || descripcionF == null || descripcionF == undefined) {
        ImprimirMensajeError('Todos los campos son obligatorios.');
    } 

    if (imgNegocio == '' || imgNegocio == null || imgNegocio == undefined){
        ImprimirMensajeError('Debe de incluir al menos una imagen de su negocio.')
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