'use strict';
/*Funcion para seccion de contacto de landingPageGrupo*/
const Contactarnos = () => {
    let names = document.getElementById('Nombre').value;
    let correo = document.getElementById('Correo').value;
    let mensaje = document.getElementById('Mensaje').value;

    if (names == '' || names == 'null' || names == 'undefined' ||
        correo == '' || correo == 'null' || correo == 'undefined' ||
        mensaje == '' || mensaje == 'null' || mensaje == 'undefined') {
        swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Complete la información requerida.'
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

/*Funcion para modal de realizar reserva*/
const currentDate = new Date();

const abrirmodal = document.querySelector("#openModalBtn");
const cerrarmodal = document.querySelector("#reservar");
const modal = document.querySelector("#modal");
const salir = document.getElementById("salir");

abrirmodal.addEventListener("click", () => {
    modal.showModal();
});

salir.addEventListener("click", () => {
    modal.close();
});

cerrarmodal.addEventListener("click", () => {
    const fechaIn = document.getElementById('fechaEntrada').value;
    const fechaOut = document.getElementById('fechaSalida').value;
    const cantiHuespedes = document.getElementById('huespedes').value;
    const fechadateIN = new Date(fechaIn);
    const fechadateOUT = new Date(fechaOut);

    if (
        cantiHuespedes === '' || fechaIn === '' || fechaOut === '' ||
        fechadateIN < currentDate || fechadateOUT < currentDate || fechadateOUT < fechadateIN
    ) {

        swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Complete la información requerida o verifique las fechas.'
        });
        modal.close();
    } else {
        swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Se realizó la reserva con éxito.'
        });
        modal.close();
    }
});

/*Funcion MENU COMPARTIR*/
let boton = document.getElementById("btnCompartir");
let menu = document.getElementById("menuDesplegable");

boton.addEventListener("click", function (event) {
    event.stopPropagation();

    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

document.addEventListener("click", function (event) {
    if (menu.style.display === "block" && event.target !== boton) {
        menu.style.display = "none";
    }
});
/*Funcion copiar link*/
let copiarLink = document.querySelector("#menuDesplegable ul li:nth-child(3) a");

copiarLink.addEventListener("click", function () {
    let enlace = window.location.href;

    let input = document.createElement("input");
    input.value = enlace;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Enlace copiado al portapapeles',
        showConfirmButton: false,
        timer: 1500
    })
});




/*----------------------------BACKEND------------------------------------*/


/*Obtener los datos del negocio del landing y mostrar datos*/
let fechaIn = document.getElementById('fechaEntrada');
let fechaOut = document.getElementById('fechaSalida');
let cantiHuespedes = document.getElementById('huespedes');
let botonReservar = document.getElementById('reservar');
let input_id = document.getElementById('txt_id');


const CargarDatos = (pNegocio) => {
    document.getElementById('NombreNegocio').innerHTML = pNegocio.NombreNegocio;
    document.getElementById('imgNegocio').innerHTML = pNegocio.FotosNegocio;
    // document.getElementById('DIRECCION').innerHTML = 'Precio por noche: '+pNegocio.Precio;
    document.getElementById('precioNoche').innerHTML = 'Precio por noche: '+pNegocio.Precio;
};

let queryString, urlParams, _id;
const IdentificarAccion = async () => {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);

    _id = urlParams.get('_id');

    let params = { '_id': _id };
    let Negocio = await ProcessGET('BuscarNegocioId', params);
    if (Negocio != null && Negocio.resultado == true && Negocio.NegocioBD != null) {
        CargarDatos(Negocio.NegocioBD);

    } else {
        ImprimirMsjsError(Negocio.msj);
    }

};
IdentificarAccion();




/*Registrar reserva a carrito de compra*/
const RegistrarDatos = async () => {

    let sfechaIn = fechaIn.value;
    let sfechaOut = fechaOut.value;
    let scantiHuespedes = Number(cantiHuespedes.value);

    //aca seguirian los subdocumentos version 1

    let s_id = input_id.value;

    if (ValidarDatos(sfechaIn, sfechaOut, scantiHuespedes) == false) {
        return;
    }

    let res = null;
    let dataBody = {
        '_id': s_id,
        'FechaEntrada': new Date(sfechaIn),
        'FechaSalida': new Date(sfechaOut),
        'CantidadHuespedes': scantiHuespedes,
    };

    res = await ProcessPOSTReservas('RegistrarReserva', dataBody, null);

    if (res == null || res == undefined) {
        ImprimirMsjsError('Ocurrio un error inesperado');
    } else if (res.resultado == false) {
        ImprimirMsjsError(res.msj);
    } else {
        swal.fire({
            icon: 'success',
            title: 'Excelente!',
            text: res.msj,
            confirmButtonText: 'Ok'
        }).then(resSwetAlert => {
            location.href = 'landingProducto.html'
        });
    }
};
/*Validar datos*/
const ValidarDatos = (pfechaIn, pfechaOut, pcantiHuespedes) => {
    if (pfechaIn == '' || pfechaIn == null || pfechaIn == undefined || new Date(pfechaIn) < new Date()) {
        ImprimirMsjsError('Por favor ingrese una fecha de nacimiento mayor a hoy 1');
        return false;
    }

    if (pfechaOut == '' || pfechaOut == null || pfechaOut == undefined || new Date(pfechaOut) < new Date() || new Date(pfechaOut) < new Date(pfechaIn)) {
        ImprimirMsjsError('Por favor ingrese una fecha de nacimiento mayor a hoy 2');
        return false;
    }

    if (pcantiHuespedes == null || pcantiHuespedes == undefined) {
        ImprimirMsjsError('Estimado usuario  la edad es requerido');
        inputEdad.value = 0;
        return false;
    } else if (pcantiHuespedes <= 0 || pcantiHuespedes > 120) {
        ImprimirMsjsError('Por favor indique una edad valida entre 1 y 120 años');
        cantiHuespedes.value = 0;
        return false;
    }
    return true;
}

botonReservar.addEventListener('click', RegistrarDatos);