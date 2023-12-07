'use strict';

// aca todos los metodos del protocolo http
const ProcessGET = async (pRouterName, pParams) => {
    let result = null;
    let requestOptionsFetch = {
        method: 'GET',
        redirect: 'follow'
    };
    let url = apiUrl + pRouterName + '?' + new URLSearchParams(pParams);
    await fetch(url, requestOptionsFetch)
        .then(async res => {
            let data = await res.json();
            result = data;
        }).catch((error) => {
            console.log(error);
        });
    return result;
}
const ProcessPOST = async (pRouterName, pData) => {
    let res = await ProcessAction('POST', pRouterName, pData);
    if (pRouterName == 'RegistrarNegocio') {
        if (res.resultado == false) {
            switch (res.code) {
                case 11000:
                    res.msj = 'No se pudo registrar el negocio, ya que existe una persona con esa misma identificacion o correo';
                    console.log('No se pudo registrar codigo 11000');
                    break;
                default:
                    break;
            }
        } else {
            // aca se va a manejar los pSubDocumentos
        }
    }
    return res;
}

// otro post para las reservas porque el de arriba llama a la ruta de los negocios
const ProcessPOSTReservas = async (pRouterName, pData) => {
    let res = await ProcessAction('POST', pRouterName, pData);
    if (pRouterName == 'RegistrarMisReservas') {
        if (res.resultado == false) {
            switch (res.code) {
                case 11000:
                    res.msj = 'No se pudo registrar la reserva, ya que no existe disponibilidad en las fechas deseadas';
                    console.log('No se pudo registrar codigo 11000');
                    break;
                default:
                    break;
            }
        } else {
            // aca se va a manejar los pSubDocumentos
        }
    }
    return res;
}

const ProcessPUTReservas = async (pRouterName, pData) => {
    let res = await ProcessAction('PUT', pRouterName, pData);
    if (pRouterName == 'ModificarReserva') {
        if (res.resultado == false) {
            switch (res.code) {
                case 11000:
                    res.msj = 'No se pudo registrar la reserva, ya que no existe disponibilidad en las fechas deseadas';
                    console.log('No se pudo registrar codigo 11000');
                    break;
                default:
                    break;
            }
        } else {
            // aca se va a manejar los pSubDocumentos
        }
    }
    return res;
}

const ProcessPUT = async (pRouterName, pData, pSubDocumentos) => {
    let res = await ProcessAction('PUT', pRouterName, pData);
    if (pRouterName == 'ModificarPersona') {
        if (res.resultado == false) {
            switch (res.code) {
                case 11000:
                    res.msj = 'No se pudo actualizar la persona, ya que existe una persona con esa misma identificacion o correo';
                    console.log('No se pudo registrar codigo 11000');
                    break;
                default:
                    break;
            }
        } else {
            // aca se va a manejar los pSubDocumentos
        }
    }
    return res;

}
const ProcessDELETE = async (pRouterName, pData) => {
    let res = await ProcessAction('DELETE', pRouterName, pData);
    return res;
}

const ProcessAction = async (pMethod, pRouterName, pData) => {
    let result = null;
    let headersOptionsFetch = new Headers();
    headersOptionsFetch.append('Content-Type', 'application/json');

    let requestOptionsFetch = {
        method: pMethod,
        redirect: 'follow',
        body: JSON.stringify(pData),
        headers: headersOptionsFetch
    };
    let url = apiUrl + pRouterName;
    await fetch(url, requestOptionsFetch)
        .then(async res => {
            let data = await res.json();
            result = data;
        }).catch((error) => {
            console.log(error);
        });
    return result;
}

const SetSesionActiva = (pDatosPerfil) => {
    localStorage.setItem('DatosSesionActiva', JSON.stringify(pDatosPerfil));
    //sessionStorage.setItem('DatosSesionActiva', JSON.stringify(pDatosPerfil));
};

const LimpiarSesionActiva = () => {
    localStorage.removeItem('DatosSesionActiva');
};

const LimpiarTodo = () => {
    localStorage.clear();
};

const GetSesionActiva = () => {
    let datosLocalStorage = localStorage.getItem('DatosSesionActiva');
    let result = JSON.parse(datosLocalStorage);
    return result;
};

const CerrarSesion = () => {
    LimpiarSesionActiva();
    location.href = 'inicioSesion.html';
};
