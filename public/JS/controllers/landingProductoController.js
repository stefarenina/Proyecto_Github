'use strict';

// let correo = document.getElementById('Correo').value;

// const Contactarnos = () => {
//     let names = document.getElementById('nombreContacto').value;
//     let correo = document.getElementById('correoContacto').value;
//     let mensaje = document.getElementById('descripcionContacto').value;

//     if (names == '' || names == 'null' || names == 'undefined'){
//         swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'Por favor escriba su nombre.'
//         });
//     } else if (correo == '' || correo == 'null' || correo == 'undefined'){
//         swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'Por favor escriba su correo.'
//         });
//     } else if (mensaje == '' || mensaje == 'null' || mensaje == 'undefined'){
//         swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'Por favor escriba el mensaje que desea enviarnos.'
//         });
//     }
//     else {
//         swal.fire({
//             icon: 'success',
//             title: 'Success',
//             text: 'El mensaje ha sido enviado con éxito.'
//         });
//     }
// }





/*  let listaNegocios = [];
 const GetListaNegocios = async () => {
     let res = await ProcessGET('ListarNegocios', null);
     if (res != null && res.resultado == true) {
         listaNegocios = res.ListaNegociosBD;
     } else {
         ImprimirMsjsError(res.msj);
         return;
     }
 };
 GetListaPersonas(); */ 


const reservar = () => {
    // Obtener todos los elementos con la clase 'imagenesPaginaPrincipal'
    let elementosReserva = document.getElementsByClassName('imagenesPaginaPrincipal');

    // Iterar sobre los elementos y agregar el evento click a cada uno
    for (let i = 0; i < elementosReserva.length; i++) {
        elementosReserva[i].onclick = (event) => {
            const idDelElementoA = event.currentTarget.parentElement.id;

            // Obtener la dirección original del enlace
            const direccionOriginal = event.currentTarget.parentElement.href;

            // Combinar la dirección original con el ID y realizar la redirección
            location.href = `${direccionOriginal}?_id=${idDelElementoA}`;
        };
    }
};

//Search controller function 

const BuscadorAction = () => {
    let palabra = document.getElementById('servicioBusqueda').value;
    if (palabra == '' || palabra == 'null' || palabra == 'undefined'){
        swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor escriba un servicio a buscar como: hospedaje, restaurantes o entretenimiento.'
        });
    } if (palabra == 'hospedaje') {
        location.href = 'landingHospedaje.html';
    } else if (palabra == 'restaurantes') {
        location.href = 'landingRestaurantes.html';
    } else if (palabra == 'entretenimiento') {
        location.href = 'landingEntretenimiento.html';
    }
    return palabra;
};





reservar();