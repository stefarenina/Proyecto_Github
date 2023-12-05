'use strict';

let listaNegocio = [];
const GetListaReservasInCart = async () => {
    let res1 = await ProcessGET('ListarNegocios', null);
    if (res1 != null && res1.resultado == true) {
        listaNegocio = res1.listaNegociosBD;

        ImprimirDatosCart();
    } else {
        ImprimirMsjsError(res1.msj);
        return;
    }
};
GetListaReservasInCart();

const ImprimirDatosCart = () => {
    let tbody = document.getElementById('tbdReservas');
    tbody.innerHTML = '';

    for (let i = 0; i < listaNegocio.length; i++) {
        if (listaNegocio[i].inCart === true) {

            let fila = tbody.insertRow();
            let celdaFoto = fila.insertCell();
            let celdaNombre = fila.insertCell();
            let celdaCategoria = fila.insertCell();
            let celdaPrecio = fila.insertCell();
            

            celdaFoto.innerHTML = listaNegocio[i].FotosNegocio;
            celdaNombre.innerHTML = listaNegocio[i].NombreNegocio;
            celdaCategoria.innerHTML = listaNegocio[i].Categoria;
            celdaPrecio.innerHTML = listaNegocio[i].Precio;
        }


    }
}