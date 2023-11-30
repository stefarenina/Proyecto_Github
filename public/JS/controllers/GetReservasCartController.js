'use strict';

let listaReserva = [];
const GetListaNegocios = async () => {
    let res = await ProcessGET('ListarReservas', null);
    if (res != null && res.resultado == true) {
        listaReserva = res.listaNegociosBD;

        ImprimirDatosCart();
    } else {
        ImprimirMsjsError(res.msj);
        return;
    }
};
GetListaNegocios();

const ImprimirDatosCart = () =>{

    for (let i = 0; i < listaNegocios.length; i++) {
        if (listaNegocios[i].inCart === true) {

        }
        
    }

}



