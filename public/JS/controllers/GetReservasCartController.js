'use strict';

let listaReserva = [];
const GetListaReservas = async () => {
    let res = await ProcessGET('ListarReservas', null);
    if (res != null && res.resultado == true) {
        listaReserva = res.ListaReservasBD;

        ImprimirDatosCart();
    } else {
        ImprimirMsjsError(res.msj);
        return;
    }
};
GetListaReservas();

const ImprimirDatosCart = () =>{

    for (let i = 0; i < listaReserva.length; i++) {
        if (listaReserva[i].inCart === true) {

        }
        
    }

}



