'use strict';
const apiUrl = 'http://localhost:3000/api/';


const ObtenerTipoIdentificacion = (ptipoId) => {
    switch (ptipoId) {
        case 1:
            return 'Fisica';
        case 2:
            return 'Juridica';
        case 3:
            return 'Dimex';
        case 4:
            return 'Pasaporte';

        default:
            return 'Sin identificacion';
    }
}
const obtenerRol = (pRol) => {
    return pRol
}
const ObtenerEstado = (pEstado) => {
    switch (pEstado) {
        case 1:
            return 'Activo';
        default:
            return 'Inactivo';
    }

}
const ImprimirMsjsError = (pMsj) => {
    swal.fire({
        icon: 'error',
        title: 'Error',
        text: pMsj
    });
}
const ImprimirMsjsSuccess = (pMsj) => {
    swal.fire({
        icon: 'success',
        title: 'Excelente!',
        text: pMsj
    });
}
const resaltarLabelInvalido = (plabelID) => {
    let obj = document.getElementById(plabelID);
    let orig = obj.style;
    obj.style = 'color:red;'

    setTimeout(() => {
        obj.style = orig;
    }, 5000);
}
const resaltarInputInvalido = (pinputID) => {
    let obj = document.getElementById(pinputID);
    let orig = obj.style;
    obj.style = 'border: 1px solid red;'

    setTimeout(() => {
        obj.style = orig;
    }, 5000);
}
function formatDate(date) {
    return (
        [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
        ].join('-') +
        ' ' +
        [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
            // padTo2Digits(date.getSeconds()),  // 👈️ can also add seconds
        ].join(':')
    );
}
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

