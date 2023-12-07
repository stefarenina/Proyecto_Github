'use strict';

let botonRegistrar = document.getElementById('btnContacto');
let inputNombreContacto = document.getElementById('nombreContacto');
let inputEmailContacto = document.getElementById('correoContacto');
let inputDescripcionContacto = document.getElementById('descripcionContacto');

const CargarDatos = (pPersona, pBtn) => {
    if (pBtn == 'btnCrea') {
        document.getElementById('btnContacto').value = 'Registrar';
    }

    inputNombreContacto.value = pPersona.NombreContacto;
    inputEmailContacto.value = pPersona.EmailContacto;
    inputDescripcionContacto.value = pPersona.Descripcion;

};

const RegistrarDatos = async () => {
    let sNombreContacto = inputNombreContacto.value;
    let sEmailContacto = inputEmailContacto.value;
    let sDescripcionContacto = inputDescripcionContacto.value;


    if (ValidarDatos(sNombreContacto, sEmailContacto, sDescripcionContacto) == false) {
        return;
    }

    let res = null;
    let dataBody = {
        'NombreCompleto': sNombreContacto,
        'EmailContacto': sEmailContacto,
        'Descripcion': sDescripcionContacto,
    };

    if (dataBody != null && dataBody != '' && dataBody != undefined) {
        res = await ProcessPUT('/RegistrarPersonaContacto', dataBody);
    }

    if (res == null || res == undefined) {
        ImprimirMsjsError('Ocurrio un error inesperado');
    } else if (res.resultado == false){
        swal.fire({
            icon: 'error',
            title: 'Lo sentimos!',
            text: 'Su correo no fue enviado correctamente',
            confirmButtonText: 'Ok'
        })
    }else{
        swal.fire({
            icon: 'success',
            title: 'Excelente!',
            text: 'Su correo fue enviado correctamente',
            confirmButtonText: 'Ok'
        }).then( resSwetAlert => {
            location.href = 'landingProducto.html'
        });
    }
};

const ValidarDatos = (pNombreCompleto, pEmailContacto, pDescripcionContacto) => {
    if (pNombreCompleto == '' || pNombreCompleto == null || pNombreCompleto == undefined) {
        swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor escriba su nombre.'
        });
        return false;
    }
    if (pEmailContacto == '' || pEmailContacto == null || pEmailContacto == undefined) {
        swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor escriba su correo.'
        });
        return false;
    }
    if (pDescripcionContacto == '' || pDescripcionContacto == null || pDescripcionContacto == undefined) {
        swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor escriba el mensaje que desea enviarnos.'
        });
        return false;
    }
    return true;
}

botonRegistrar.addEventListener('click', RegistrarDatos);