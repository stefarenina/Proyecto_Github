'use strict';

let nombre = document.getElementById('txtNombre');
let apellido = document.getElementById('txtApellido');
let correo = document.getElementById('txtCorreo');
let fechaNacimiento = document.getElementById('txtFechaNacimiento');
let direccion = document.getElementById('txtDireccion');
let inputsSexo = document.getElementsByName('rbtSexo');
let documento = document.getElementById('sltDocumento');
let inputIdentificacion = document.getElementById('txtidentificacion');
let imagen = document.getElementById('placeFotos');
let contrasena = document.getElementById('txtPass');
let contrasena2 = document.getElementById('txtPass2');
let input_id = document.getElementById('txt_id');
let buttonSubmit = document.getElementById('btn-registro');


const RegistrarDatos = async () => {
    let imagen = document.getElementById('placeFotos');
    let sNombre = nombre.value;
    let sApellido = apellido.value;
    let sCorreo = correo.value;
    let fechaNac = txtFechaNacimiento.value;
    let sDireccion = direccion.value;
    let sexo = null;
    for (let i = 0; i < inputsSexo.length; i++) {
        if (inputsSexo[i].checked == true) {
            sexo = inputsSexo[i].value;
            break;
        }
    }
    let sDocumento = documento.value;
    let sIdentificacion = inputIdentificacion.value;
    let imgFoto = imagen.src;
    let sContrasena = contrasena.value;
    let sContrasena2 = contrasena2.value;


    if (ValidarDatos(sDocumento, sIdentificacion, sNombre, sApellido, sexo, sCorreo, sContrasena, sContrasena2, fechaNac, sDireccion, imgFoto) == false) {
        return;
    }

    let res = null;
    let dataBody = {
        'TipoIdentificacion': sDocumento,
        'Identificacion': sIdentificacion,
        'Nombre': sNombre,
        'Apellidos': sApellido,
        'Sexo': sexo,
        'Nacimiento': new Date(fechaNac),
        'Direccion': sDireccion,
        'Estado': "Activo",
        'Email': sCorreo,
        'Password': sContrasena,
        'Rol': "Cliente",
        'FotoPerfil': imgFoto
    };


    res = await ProcessPOST('RegistrarPersona', dataBody, null);
  

    if (res == null || res == undefined) {
        ImprimirMsjsError('Ocurrio un error inesperado');
    } else if (res.resultado == false) {
        ImprimirMsjsError(res.msj);
    } else {
        swal.fire({
            icon: 'success',
            title: 'Excelente!',
            text: res.msj,
            confirmButtonText: 'Ok'
        }).then(resSwetAlert => {
            location.href = 'inicioSesion.html';
        });
    }
};
const ValidarDatos = (pTipoIdentificacion, pIdentificacion, pNombre, pApellido, psexo, pEmail, pPass, pPassConfirmacion, pNacimiento, pDireccion) => {
    if (pTipoIdentificacion == '' || pTipoIdentificacion == null || pTipoIdentificacion == undefined) {
        resaltarLabelInvalido('lbltipoIdentificacion');
        resaltarInputInvalido('txttipoIdentificacion');
        ImprimirMsjsError('Por favor seleccione tipo de identificacion');
        return false;
    }
    if (pIdentificacion == '' || pIdentificacion == null || pIdentificacion == undefined) {
        resaltarLabelInvalido('lblidentificacion');
        resaltarInputInvalido('txtidentificacion');
        ImprimirMsjsError('Por favor ingrese su identificacion');
        return false;
    }
    if (pNombre == '' || pNombre == null || pNombre == undefined) {
        resaltarLabelInvalido('lblnombre');
        resaltarInputInvalido('txtnombre');
        ImprimirMsjsError('Por favor ingrese su Nombre');
        return false;
    }
    if (pApellido == '' || pApellido == null || pApellido == undefined) {
        resaltarLabelInvalido('lblapellido');
        resaltarInputInvalido('txtapellido');
        ImprimirMsjsError('Por favor ingrese sus Apellidos');
        return false;
    }
    if (psexo == '' || psexo == null || psexo == undefined) {
        resaltarLabelInvalido('lblSexo');
        resaltarInputInvalido('txtsexo');
        ImprimirMsjsError('Por favor indique su Sexo');
        return false;
    }
    if (pEmail == null || pEmail == '' || pEmail == undefined) {
        resaltarLabelInvalido('lblEmail');
        resaltarInputInvalido('txtEmail');
        ImprimirMsjsError('Por favor ingrese su Correo');
        return false;
    }
    if (pPass == null || pPass == '' || pPass == undefined) {
        resaltarLabelInvalido('lblPass');
        resaltarInputInvalido('txtPass');
        ImprimirMsjsError('Por favor ingrese su Contraseña');
        return false;
    }
    if (pPassConfirmacion == null || pPassConfirmacion == '' || pPassConfirmacion == undefined) {
        resaltarLabelInvalido('lblPass2');
        resaltarInputInvalido('txtPass2');
        ImprimirMsjsError('Por favor ingrese su Confrimacion de Contraseña');
        return false;
    }
    if (pPass != pPassConfirmacion) {
        resaltarLabelInvalido('lblPass');
        resaltarInputInvalido('txtPass');
        resaltarLabelInvalido('lblPass2');
        resaltarInputInvalido('txtPass2');
        ImprimirMsjsError('Por favor ingrese ambas Contraseñas iguales');
        return false;
    }
    if (pNacimiento == '' || pNacimiento == null || pNacimiento == undefined || new Date(pNacimiento) >= new Date()) {
        resaltarLabelInvalido('lblnacimiento');
        resaltarInputInvalido('txtnacimiento');
        ImprimirMsjsError('Por favor ingrese una fecha de nacimiento menor a hoy');
        return false;
    }
    if (pDireccion == null || pDireccion == undefined) {
        ImprimirMsjsError('Estimado usuario  la direccion es requerido');
        resaltarLabelInvalido('lbldireccion');
        resaltarInputInvalido('lbldireccion');
        return false;
    } 
    return true;
}

buttonSubmit.addEventListener('click', RegistrarDatos);