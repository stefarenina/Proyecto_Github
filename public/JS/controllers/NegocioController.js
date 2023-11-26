'use strict';

let listaNegocios = [];
const GetListaNegocios = async () => {
    let res = await ProcessGET('ListarNegocios', null);
    if (res != null && res.resultado == true) {
        listaNegocios = res.listaNegociosBD;
        ImprimirDatos();
    } else {
        ImprimirMsjsError(res.msj);
        return;
    }
    console.log("pruebas")
};

GetListaNegocios();
const ImprimirDatos = () => {
    let tbody = document.getElementById('tbdNegocios');
    tbody.innerHTML = '';

    for (let i = 0; i < listaNegocios.length; i++) {

        let fila = tbody.insertRow();
        let celdaNombreNegocio = fila.insertCell();
        let celdaDescripcionNegocio = fila.insertCell();
        let celdaPrecio = fila.insertCell();
        let celdaNumero = fila.insertCell();
        let celdaCategoria = fila.insertCell();
        let celdaDireccion = fila.insertCell();
        //let celdaFoto = fila.insertCell();


        celdaNombreNegocio.innerHTML = listaNegocios[i].NombreNegocio;
        celdaDescripcionNegocio.innerHTML = listaNegocios[i].Descripcion;
        celdaPrecio.innerHTML = listaNegocios[i].Precio;
        celdaNumero.innerHTML = listaNegocios[i].NumeroContacto;
        celdaCategoria.innerHTML = listaNegocios[i].Categoria;
        celdaDireccion.innerHTML = listaNegocios[i].Direccion;
        //celdaFoto.innerHTML = listaNegocios[i].FotosNegocio;
    }
};