'use strict';

let nombre = document.getElementById('txtEmpresa');
let descripcion = document.getElementById('txtDescripcion');
let telefono = document.getElementById('telNumber');
let precioValor = document.getElementById('txtPrecio');
let imagen = document.getElementById('negocioFotos');
let direccion = document.getElementById('txtDireccion');
let radio = document.querySelectorAll('.rbtCategoria');
let buttonSubmit = document.getElementById('btnReg');



const ValidarFormulario = () => { // obtenemos los valores de cada elemento.
    let empresa = nombre.value;
    let telEmpresa = telefono.value;
    let direccionF = direccion.value;
    let descripcionF = descripcion.value;
    let contadorRadio = 0;
    imagen = document.getElementById('negocioFotos');
    let precioF = precioValor.value;
    

    //Validamos los campos si estan vacios le damos una alerta.
    if (empresa == '' || empresa == null || empresa == undefined || telEmpresa == '' ||
        telEmpresa == null || telEmpresa == undefined || direccionF == '' || direccionF == null || direccionF == undefined || descripcionF == '' || descripcionF == null || descripcionF == undefined || precioF == inputPrecio.value)  
        {
        ImprimirMensajeError('Todos los campos son obligatorios.');
        } 

/*     if (imgNegocio == 'negocioFotos' || imgNegocio == null || imgNegocio == undefined){
        ImprimirMensajeError('Debe de incluir al menos una imagen de su negocio.')
    } */

    radio.forEach(element => {
        if (element.checked == true) {
            contadorRadio++;
        } 
    });

    if (contadorRadio < 1) {
        ImprimirMensajeError('Debera elegir al menos 1 opcion');
        console.log("alt: " + imagen.alt)
    }

    else{
        RegistrarNegocio();
        console.log("jijijiojjk")
    }
};


buttonSubmit.addEventListener('click', ValidarFormulario);


const ImprimirMensajeError = (texto) => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: texto
    });

};