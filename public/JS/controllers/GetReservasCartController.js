'use strict';

let sesion;
let PersonaIDInfo;

const GetData = async () => {   

    sesion = GetSesionActiva();
    PersonaIDInfo = sesion._id;

    };

GetData();

let listaReservasPendientes = [];
const GetListaReservasInCart = async () => {
    let res = await ProcessGET('ListarReservasPendientes', null);
    if (res != null && res.resultado == true) {
        listaReservasPendientes = res.listaReservasPendientesBD;

        ImprimirDatosCart();
    } else {
        ImprimirMsjsError(res.msj);
        return;
    }
};
GetListaReservasInCart();



function ImprimirDatosCart() {
    let tbody = document.getElementById('tbdReservas');
    tbody.innerHTML = '';
    let total = 0;
    let impuesto = 0;



    for (let i = 0; i < listaReservasPendientes.length; i++) {
        if (listaReservasPendientes[i].PersonaID === PersonaIDInfo) {
            let fila = tbody.insertRow();
            let celdaFoto = fila.insertCell();
            let celdaNombre = fila.insertCell();
            let celdaCategoria = fila.insertCell();
            let celdaPrecio = fila.insertCell();
    
            celdaFoto.innerHTML = `<td><img src="${listaReservasPendientes[i].FotosNegocio}" alt="Imagen" class="fotoCarrito"></td>`;
            celdaNombre.innerHTML = listaReservasPendientes[i].Nombre;
            celdaCategoria.innerHTML = listaReservasPendientes[i].Categoria;
            celdaPrecio.innerHTML = (listaReservasPendientes[i].Precio * listaReservasPendientes[i].Dias) * listaReservasPendientes[i].CantidadHuespedes;
    
            tbody.appendChild(fila);
    
            total += Number(celdaPrecio.innerHTML);
            impuesto = total * 0.13;
            
        }


    }

    let filaMetodo = tbody.insertRow();
    let celdaMetodo = filaMetodo.insertCell();
    celdaMetodo.colSpan = 4;
    celdaMetodo.innerHTML = `
    <div class="impuesto">
    <td>Metodo de pago</td>
    <td><select id="select1" onchange="MetodoPagoChange()">
    <option> -- Seleccionar --</option>
    <option value="opcion1" id="anadirTarjeta">Tarjeta Credito/Debito</option>
    <option value="opcion2">Anadir metodo de pago</option>
    <option value="opcion3">Tarjeta 1</option>
    </select> 
    </td>
    </div>
    `;
    tbody.appendChild(filaMetodo);

    let filaImpuesto = tbody.insertRow();
    let celdaImpuesto = filaImpuesto.insertCell();
    celdaImpuesto.colSpan = 3;
    celdaImpuesto.innerHTML = `<strong class="totalCarrito">Impuesto:</strong>`;
    let celdaImpuestoTotal = filaImpuesto.insertCell();
    celdaImpuestoTotal.innerHTML = `<strong>${impuesto}</strong>`;

    let filaTotal = tbody.insertRow();
    let celdaTotal = filaTotal.insertCell();
    celdaTotal.colSpan = 3;
    celdaTotal.innerHTML = `<strong class="totalCarrito">Total:</strong>`;
    let celdaTotalPrecio = filaTotal.insertCell();
    celdaTotalPrecio.innerHTML = `<strong>${total + impuesto}</strong>`;
    tbody.appendChild(filaTotal);
}

let btnLimpiarCarrito = document.getElementById('btnVaciar');

btnLimpiarCarrito.addEventListener('click', async () => {
    let res = await ProcessDELETE('EliminarReservasPendientes');

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