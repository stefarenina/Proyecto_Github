'use strict';

let listaNegocios = [];
const GetListaReservasInCarts = async () => {
    let res = await ProcessGET('ListarNegocios', null);
    if (res != null && res.resultado == true) {
        listaNegocios = res.listaNegociosBD;

        ImprimirDatosCart();
        AumentarCarrito();
    } else {
        ImprimirMsjsError(res.msj);
        return;
    }
};
GetListaReservasInCarts();



function ImprimirDatosCart (){
    let tbody = document.getElementById('tbdReservas');
    tbody.innerHTML = '';
    let total = 0;

    

    for (let i = 0; i < listaNegocios.length; i++) {
        if (listaNegocios[i].inCart === true) {

            let fila = tbody.insertRow();
            let celdaFoto = fila.insertCell();
            let celdaNombre = fila.insertCell();
            let celdaCategoria = fila.insertCell();
            let celdaPrecio = fila.insertCell();

            celdaFoto.innerHTML = `<td><img src="${listaNegocios[i].FotosNegocio}" alt="Imagen" class="fotoCarrito"></td>`;
            celdaNombre.innerHTML = listaNegocios[i].NombreNegocio;
            celdaCategoria.innerHTML = listaNegocios[i].Categoria;
            celdaPrecio.innerHTML = listaNegocios[i].Precio;

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





let btnLimpiarCarrito = document.getElementById('btnVaciar');

btnLimpiarCarrito.addEventListener('click', async () =>{
    let res = await ProcessPUT('LimpiarCart');

    if (res.info.modifiedCount === 0) {
        ImprimirMsjsError('No hay datos en el carrito que eliminar, agrege algo al carrito.');
    } else if (res.resultado == false) {
        ImprimirMsjsError(res.msj);
    } else {
        swal.fire({
            icon: 'success',
            title: 'Se limpio el carrito de manera correcta',
        })
    }
    GetListaReservasInCart();
})