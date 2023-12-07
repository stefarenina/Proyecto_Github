'use strict';


let inputUser = document.getElementById('txtEmail');
let inputPass = document.getElementById('txtPass');


const ValidarInputs = (pUser, pPass) => {
    if (pUser == null || pUser == undefined || pUser == '') {        
        swal.fire({
            icon:'error',
            title:'Error',
            text:'Usuario es requerido!'
        });
        return false;
    }
    if (pPass == null || pPass == undefined || pPass == '') {        
        swal.fire({
            icon:'error',
            title:'Error',
            text:'Contraseña es requerida!'
        });
        return false;
    }
    return true;
};

const  RedireccionarUsuario = (PersonaDB) => {
    
    let nombreRol = obtenerRol(PersonaDB.Rol);
    if (nombreRol == 'Cliente') {
        console.log("hashdashd")
        location.href = 'landingProducto.html';
    }
    if (nombreRol == 'Admin') {
        location.href = 'reporteriaAdministrativa.html';
    }
};

const IniciarSesion = async () => {
    let user = inputUser.value;
    let pass = inputPass.value;

    if (ValidarInputs(user, pass) == false) {
        return;
    }

    let params = {
        'Email': user,
        'Password': pass
    };

    let res = await ProcessGET('AutenticarPersona', params);

    if (res != null && res.resultado == true && res.PersonaDB != null) {
        
        RedireccionarUsuario(res.PersonaDB);
        SetSesionActiva(res.PersonaDB);
    } else {
        //console.log("here")
        ImprimirMsjsError(res.msj);
    }
};

