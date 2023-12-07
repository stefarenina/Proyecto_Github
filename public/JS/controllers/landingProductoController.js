'use strict';

let correo = document.getElementById('Correo').value;

const Contactarnos = () => {
    let names = document.getElementById('Nombre').value;
    let correo = document.getElementById('Correo').value;
    let mensaje = document.getElementById('Mensaje').value;

    if (names == '' || names == 'null' || names == 'undefined'){
        swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor escriba su nombre.'
        });
    } else if (correo == '' || correo == 'null' || correo == 'undefined'){
        swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor escriba su correo.'
        });
    } else if (mensaje == '' || mensaje == 'null' || mensaje == 'undefined'){
        swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor escriba el mensaje que desea enviarnos.'
        });
    }
    else {
        swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'El mensaje ha sido enviado con éxito.'
        });
    }
}


 /*let listaNegocios = [];
 const GetListaNegocios = async () => {
    console.log('GetListaNegocios');
     let res = await ProcessGET('ListarNegocios', null);
     if (res != null && res.resultado == true) {
         listaNegocios = res.listaNegociosBD;
         document.getElementById('cuentaCarrito').innerHTML = listaNegocios.length;
     } else {
         ImprimirMsjsError(res.msj);
         return;
     }
 };
 GetListaNegocios();  */


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
//  let BuscadorPalabra = document.getElementById()
const BuscadorAction = () => {
    location.href = 'landingHospedaje.html';
};
reservar();