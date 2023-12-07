/*----------------------------BACKEND------------------------------------*/

'use strict';
/*Obtener los datos del negocio del landing y mostrar datos*/
let fechaIn = document.getElementById('fechaEntrada');
let fechaOut = document.getElementById('fechaSalida');
let cantiHuespedes = document.getElementById('huespedes');
let botonReservar = document.getElementById('reservar');
let input_id = document.getElementById('txt_id');

let coordenadasObjeto;
let Nombre;
let Descripcion;
let Precio;
let dias;


const calcularDias = () => {
    let fechaEntrada = new Date(document.getElementById("fechaEntrada").value);
    let fechaSalida = new Date(document.getElementById("fechaSalida").value);

    let diffTiempo = fechaSalida - fechaEntrada;
    dias = Math.ceil(diffTiempo / (1000 * 60 * 60 * 24));

    document.getElementById("cantidadNoches").innerHTML = 'Cantidad de noches: ' + dias;
};


const CargarDatos = (pNegocio) => {
    document.getElementById('NombreNegocio').innerHTML = pNegocio.NombreNegocio;
    document.getElementById('imgNegocio').src = pNegocio.FotosNegocio;

    document.getElementById('precioNoche').innerHTML = 'Precio por noche: ₡'+pNegocio.Precio;
    Nombre=pNegocio.NombreNegocio;
    Descripcion=pNegocio.Descripcion;
    Precio=pNegocio.Precio;
    console.log(pNegocio)
    coordenadasObjeto = JSON.parse(pNegocio.Coordenadas);
    crearMarcador();
};

let queryString, urlParams, _id;
const IdentificarAccion = async () => {
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
    _id = urlParams.get('_id');

    let params = { '_id': _id };
    console.log("ah i am de the browser")
    let Negocio = await ProcessGET('BuscarNegocioId', params);
    if (Negocio != null && Negocio.resultado == true && Negocio.NegocioBD != null) {
        CargarDatos(Negocio.NegocioBD);

    } else {
        ImprimirMsjsError(Negocio.msj);
        console.log("a")
        console.log(Negocio)
        console.log(Negocio.NegocioBD)
    }

};
IdentificarAccion();


/*Registrar reserva a carrito de compra*/
const RegistrarDatos = async () => {
    let sNombre=Nombre;
    let sfechaIn = fechaIn.value;
    let sfechaOut = fechaOut.value;
    let sCantidadHuespedes = Number(cantiHuespedes.value);
    let sDescripcion= Descripcion;
    let sPrecio= Number(Precio);
    let sEstado=false;
    

    //aca seguirian los subdocumentos version 1

    let s_id = input_id.value;

    if (ValidarDatos(sfechaIn, sfechaOut, sCantidadHuespedes) == false) {
        return;
    }

    let res = null;
    let dataBody = {
        '_id': s_id,
        'Nombre':sNombre,
        'FechaEntrada': sfechaIn,
        'FechaSalida': sfechaOut,
        'CantidadHuespedes': sCantidadHuespedes,
        'Descripcion': sDescripcion,
        'Precio': sPrecio,
        'Estado': sEstado,
    };

    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
    _id = urlParams.get('_id');

    let params = { '_id': _id };


    res = await ProcessPOSTReservas('RegistrarMisReservas', dataBody, null);

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

    await ProcessPUT('AgregarReservaCart', params);
    await ProcessPUT('AumentarNumeroCart', params);
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

let map = L.map('map').setView([9.8, -84], 7); // Centro del mapa y nivel de zoom inicial

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

const crearMarcador = () => {
    if (coordenadasObjeto) {
        // Crea el marcador utilizando las coordenadas globales
        let marker = L.marker([coordenadasObjeto.lat, coordenadasObjeto.lng], { draggable: false }).addTo(map);
        // Resto del código relacionado con el marcador...
    }
};

botonReservar.addEventListener('click', RegistrarDatos);