'use strict';

let modal = document.querySelector("#modal");
let salir = document.getElementById("btnAtras");

window.onclick = (event) => {
    if (event.target == modal) {
        modal.close();
    }
};

salir.addEventListener("click", () => {
    modal.close();
});


function CancelarReserva(){
    modal.showModal();
};


function ConfirmarCancelacion(){
    swal.fire({
        icon: 'success',
        title: 'Realizado',
        text: 'Su reserva fue cancelada con éxito. Aqui tiene su vale de cancelacion: 896YSO0'
    });
    modal.close();
}

//Mostrar reservas de mongo
let listaReservas = [];
const GetListaReservas = async () => {
    let res = await ProcessGET('ListarReservas', null);
    if (res != null && res.resultado == true) {
        listaReservas = res.ListaReservasBD;
        ImprimirDatos();
    } else {
        ImprimirMsjsError(res.msj);
        return;
    }
};

GetListaReservas();

const ImprimirDatos = () => {
    let tbody = document.getElementById('tbdMisReservas');
    tbody.innerHTML = '';

    for (let i = 0; i < listaReservas.length; i++) {

        let fila = tbody.insertRow();
        let celdaNombre = fila.insertCell();
        let celdaFechaIN = fila.insertCell();
        let celdaFechaOut = fila.insertCell();
        let celdaCantidadHuespedes = fila.insertCell();
        let celdaDescripccion = fila.insertCell();

        celdaNombre.innerHTML = ObtenerTipoIdentificacion(listaReservas[i].Nombre);
        celdaFechaIN.innerHTML = listaReservas[i].FechaEntrada;
        celdaFechaOut.innerHTML = listaReservas[i].FechaSalida;
        celdaCantidadHuespedes.innerHTML = listaReservas[i].CantidadHuespedes;
        celdaDescripccion.innerHTML = listaReservas[i].Descripcion;
        
        let btnDelete = document.createElement('button');
        btnDelete.type = 'button';
        btnDelete.innerText = 'Cancelar';
        btnDelete.title = 'Cancelar';
        btnDelete.classList.add('btnsTabla');
        btnDelete.onclick = async () => {
            let confirmacion = false;
            await Swal.fire({
                title: 'Desea eliminar la reserva de ' + listaReservas[i].Nombre,
                icon: 'warning',
                confirmButtonText: 'Confirmar',
                denyButtonText: 'Cancelar',
                showDenyButton: true
            }).then((res) =>{
                confirmacion = res.isConfirmed;
            });

            if (confirmacion == true) {
                let data = {
                    '_id': listaReservas[i]._id
                };

                let result = await ProcessDELETE('EliminarReserva', data);
                if (result != null && result.resultado == true) {
                    ImprimirMsjsSuccess(result.msj);
                } else {
                    ImprimirMsjsError(result.msj);
                }
                await GetListaReservas();
            }
        };

        let divBtns = document.createElement('div');
        divBtns.appendChild(btnDelete);

        celdaAcciones.appendChild(divBtns);
    }
};