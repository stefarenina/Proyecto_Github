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
        let celdaEstado = fila.insertCell();
        let celdaAcciones = fila.insertCell();
        //let celdaDireccion = fila.insertCell();
        //let celdaFoto = fila.insertCell();


        celdaNombreNegocio.innerHTML = listaNegocios[i].NombreNegocio;
        celdaDescripcionNegocio.innerHTML = listaNegocios[i].Descripcion;
        celdaPrecio.innerHTML = listaNegocios[i].Precio;
        celdaNumero.innerHTML = listaNegocios[i].NumeroContacto;
        celdaCategoria.innerHTML = listaNegocios[i].Categoria;
        celdaEstado.innerHTML = listaNegocios[i].Estado;
        //celdaDireccion.innerHTML = listaNegocios[i].Direccion;
        //celdaFoto.innerHTML = listaNegocios[i].FotosNegocio;

/*         let btnEdit = document.createElement('button');
        btnEdit.type = 'button';
        btnEdit.innerText = '✎';
        btnEdit.title = 'EDITAR';
        btnEdit.classList.add('btnsTabla');
        btnEdit.onclick = () => {
            location.href = 'registroUsuario.html?_id=' + listaNegocios[i]._id;
        }; */

        
        let btnDelete = document.createElement('button');
        btnDelete.type = 'button';
        btnDelete.innerText = '🗑️';
        btnDelete.title = 'ELIMINAR';
        btnDelete.classList.add('btnsTabla');
        btnDelete.onclick = async () => {
            let confirmacion = false;
            console.log(listaNegocios[i])
            await Swal.fire({
                title: 'Desea eliminar el registro de ' + listaNegocios[i].NombreNegocio,
                icon: 'warning',
                confirmButtonText: 'Confirmar',
                denyButtonText: 'Cancelar',
                showDenyButton: true
            }).then((res) =>{
                confirmacion = res.isConfirmed;
            });

            if (confirmacion == true) {
                let data = {
                    '_id': listaNegocios[i]._id
                };

                let result = await ProcessDELETE('EliminarPersona', data);
                if (result != null && result.resultado == true) {
                    ImprimirMsjsSuccess(result.msj);
                } else {
                    ImprimirMsjsError(result.msj);
                }
                await GetListaNegocios();
            }
        };

        let btnInactivar = document.createElement('button');
        btnInactivar.type = 'button';
        btnInactivar.innerText = 'Off';
        btnInactivar.title = 'Inactivar';
        btnInactivar.classList.add('btnsTabla');
        btnInactivar.onclick = async () => {
            let confirmacion = false;
            await Swal.fire({
                title: 'Desea inactivar el registro de ' + listaNegocios[i].NombreNegocio,
                icon: 'warning',
                confirmButtonText: 'Confirmar',
                denyButtonText: 'Cancelar',
                showDenyButton: true
            }).then((res) =>{
                confirmacion = res.isConfirmed;
            });

            if (confirmacion == true) {
                let data = {
                    '_id': listaNegocios[i]._id
                };

                let result = await ProcessPUT('DesactivarNegocio', data);
                if (result != null && result.resultado == true) {
                    ImprimirMsjsSuccess(result.msj);
                } else {
                    ImprimirMsjsError(result.msj);
                }
                await GetListaNegocios();
            }
        };
        let btnActivar = document.createElement('button');
        btnActivar.type = 'button';
        btnActivar.innerText = 'On';
        btnActivar.title = 'Activar';
        btnActivar.classList.add('btnsTabla');
        btnActivar.onclick = async () => {
            let confirmacion = false;
            await Swal.fire({
                title: 'Desea activar el registro de ' + listaNegocios[i].NombreNegocio,
                icon: 'warning',
                confirmButtonText: 'Confirmar',
                denyButtonText: 'Cancelar',
                showDenyButton: true
            }).then((res) =>{
                confirmacion = res.isConfirmed;
            });

            if (confirmacion == true) {
                let data = {
                    '_id': listaNegocios[i]._id
                };

                let result = await ProcessPUT('ActivarNegocio', data);
                if (result != null && result.resultado == true) {
                    ImprimirMsjsSuccess(result.msj);
                } else {
                    ImprimirMsjsError(result.msj);
                }
                await GetListaNegocios();
            }
        };
        


        let divBtns = document.createElement('div');
        //divBtns.appendChild(btnEdit);
        divBtns.appendChild(btnDelete);
        divBtns.appendChild(btnActivar);
        divBtns.appendChild(btnInactivar);
        celdaAcciones.appendChild(divBtns);


    }
};