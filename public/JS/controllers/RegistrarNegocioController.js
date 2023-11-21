'use strict';

let inputNombreNegocio = document.getElementById('txtEmpresa');
let inputDescripcion = document.getElementById('txtDescripcion');
let radioCategorias = document.getElementsByName('radios');
let inputNumeroContacto = document.getElementById('telNumber');
let inputFotosNegocio = document.getElementById('negocioFotos');
let inputDireccion = document.getElementById('txtDireccion');
let inputPrecio = document.getElementById('txtPrecio');
//let buttonSubmit = document.getElementById('btnReg');


const RegistrarNegocio = async () => {
    console.log("HUIHIHJ") 
    let nombreNegocio = inputNombreNegocio.value;
    let descripcionNegocio = inputDescripcion.value;
    let categoria = null;
    for (let i = 0; i < radioCategorias.length; i++) {
        if (radioCategorias[i].checked == true) {
            categoria = radioCategorias[i].value;
            break;
        }
    } 
    let numeroContacto = inputNumeroContacto.value;
    let fotosNegocio = negocioFotos.src;
    let direccion = inputDireccion.value;
    let precio = inputPrecio.value;

    if (ValidarDatosNegocio(nombreNegocio, descripcionNegocio, numeroContacto, categoria, direccion, fotosNegocio) === false) {
        return;
    }
    


    let res = null;
    let dataBody = {
        'NombreNegocio': nombreNegocio,
        'Descripcion': descripcionNegocio,
        'Precio': precio,
        'NumeroContacto': numeroContacto,
        'Categoria': categoria,
        'Direccion': direccion,
        'FotosNegocio': fotosNegocio
        
    };
    console.log(dataBody)
    // Se realiza el registro de la persona
    res = await ProcessPOST('RegistrarNegocio', dataBody, null);

    if (res == null || res == undefined) {
        ImprimirMsjsError('Ocurrió un error inesperado');
    } else if (res.resultado == false) {
        ImprimirMsjsError(res.msj);
        console.log(res.error)
    } else {
        swal.fire({
            icon: 'success',
            title: '¡Registro exitoso!',
            text: res.msj,
            confirmButtonText: 'Ok'
        }).then(resSwetAlert => {
            // Puedes redirigir al usuario a la página que desees después del registro exitoso.
            // Por ejemplo, puedes redirigirlo a la página de inicio.
            location.href = 'perfil.html';
        });
    }
};

const ValidarDatosNegocio = (pNombreNegocio, pDescripcion, pNumeroContacto, pCategoria, pDireccion, pFotosNegocio) => {
    if (pNombreNegocio == '' || pNombreNegocio == null || pNombreNegocio == undefined) {
        console.log("Fallo la validación del nombre del negocio:", pNombreNegocio);
        return false;
    }
    if (pDescripcion == '' || pDescripcion == null || pDescripcion == undefined) {
        console.log("Fallo la validación de la descripción del negocio:", pDescripcion);
        return false;
    }
    if (pNumeroContacto == '' || pNumeroContacto == null || pNumeroContacto == undefined) {
        console.log("Fallo la validación del número de contacto del negocio:", pNumeroContacto);
        return false;
    }
    if (pCategoria == '' || pCategoria == null || pCategoria == undefined) {
        console.log("Fallo la validación de la categoría del negocio:", pCategoria);
        return false;
    }
    if (pDireccion == '' || pDireccion == null || pDireccion == undefined) {
        console.log("Fallo la validación de la dirección del negocio:", pDireccion);
        return false;
    }
    // Puedes agregar más validaciones según sea necesario, por ejemplo, para pFotosNegocio
    else {
        console.log("VALIDACION CORRECTA")
    }
    return true;
};



//buttonSubmit.addEventListener('click', RegistrarNegocio);
