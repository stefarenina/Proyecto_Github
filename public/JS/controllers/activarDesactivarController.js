'use strict';

let listaNegocios = [];
const GetListaNegocios = async () => {
    let res = await ProcessGET('ListarNegocios', null);
    if (res != null && res.resultado == true) {
        listaNegocios = res.ListaNegociosBD;
        console.log(listaNegocios)
        console.log(res)
    } else {
        ImprimirMsjsError(res.msj);
        return;
    }
};
GetListaNegocios();

const ImprimirDatos = () => {
    let lneg = document.getElementById('listanegocios');
    for (let i = 0; i < listaNegocios.length; i++) {
        if (listaPersonas[i].Estado == "desactivado"){
            let divi = lneg.insert
        }
    }
}