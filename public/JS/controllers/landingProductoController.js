'use strict';


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

reservar();