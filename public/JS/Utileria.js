'use strict';
const apiUrl = 'http://localhost:3000/api/';

const ObtenerRol = (pRol) => {
    switch (pRol) {
        case 1:
            return 'Admin';
        case 2:
            return 'Client';
    }
}
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
    var obj = document.getElementById(plabelID);
    var orig = obj.style;
    obj.style = 'color:red;'

    setTimeout(() => {
        obj.style = orig;
    }, 5000);
}
const resaltarInputInvalido = (pinputID) => {
    var obj = document.getElementById(pinputID);
    var orig = obj.style;
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