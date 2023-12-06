'use strict';

let listaNegocio = [];
const GetListaReservasInCart = async () => {
    let res = await ProcessGET('ListarNegocios', null);
    if (res != null && res.resultado == true) {
        listaNegocio = res.listaNegociosBD;

        ImprimirDatosCart();
    } else {
        ImprimirMsjsError(res.msj);
        return;
    }
};
GetListaReservasInCart();

const ImprimirDatosCart = () => {
    let tbody = document.getElementById('tbdReservas');
    tbody.innerHTML = '';
    let total = 0;
    

    for (let i = 0; i < listaNegocio.length; i++) {
        if (listaNegocio[i].inCart === true) {

            let fila = tbody.insertRow();
            let celdaFoto = fila.insertCell();
            let celdaNombre = fila.insertCell();
            let celdaCategoria = fila.insertCell();
            let celdaPrecio = fila.insertCell();

            celdaFoto.innerHTML = `<td><img src="${listaNegocio[i].FotosNegocio}" alt="Imagen" class="fotoCarrito"></td>`;
            celdaNombre.innerHTML = listaNegocio[i].NombreNegocio;
            celdaCategoria.innerHTML = listaNegocio[i].Categoria;
            celdaPrecio.innerHTML = listaNegocio[i].Precio;

            tbody.appendChild(fila);

            total += Number(celdaPrecio.innerHTML);
        }
    }

    let filaTotal = tbody.insertRow();
    let celdaTotal = filaTotal.insertCell();
    celdaTotal.colSpan = 3;
    celdaTotal.innerHTML = `<strong class="totalCarrito">Total:</strong>`;
    let celdaTotalPrecio = filaTotal.insertCell();
    celdaTotalPrecio.innerHTML = `<strong>${total}</strong>`;
    tbody.appendChild(filaTotal);
}


let contadorCarrito = 0;
let span = document.getElementById('cuentaCarrito').value;

const actualizarContador = () => {
    for (let i = 0; i < listaNegocio.length; i++) {
        if (listaNegocio[i].Cantidad === 1) {
            contadorCarrito = contadorCarrito + 1;
            span.test
        }
    }

};


let btnLimpiarCarrito = document.getElementById('btnVaciar');

btnLimpiarCarrito.addEventListener('click', async () =>{
    let res = await ProcessPUT('LimpiarCart');

    if (res == null || res == undefined) {
        ImprimirMsjsError('Ocurrio un error inesperado');
    } else if (res.resultado == false) {
        ImprimirMsjsError(res.msj);
    } else {
        swal.fire({
            icon: 'success',
            title: 'Se limpio el carrito de manera correcta',
        })
    }
})