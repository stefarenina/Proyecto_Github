'use strict';
/*Funcion para seccion de contacto de landingPageGrupo*/
const Contactarnos = () => {
    let names = document.getElementById('Nombre').value;
    let correo = document.getElementById('Correo').value;
    let mensaje = document.getElementById('Mensaje').value;

    if(names == '' || names == 'null' || names == 'undefined' ||
    correo == '' || correo == 'null' || correo == 'undefined'||
    mensaje == '' || mensaje == 'null' || mensaje == 'undefined')
    {
        swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Complete la información requerida.'
        });
    }
    else {
        swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'El mensaje ha sido enviado con éxito.'
        });
    }
}

/*Funcion para modal de realizar reserva*/
const currentDate = new Date();

const abrirmodal = document.querySelector("#openModalBtn");
const cerrarmodal = document.querySelector("#reservar");
const modal = document.querySelector("#modal");
const salir = document.getElementById("salir");

abrirmodal.addEventListener("click", () => {
    modal.showModal();
});

salir.addEventListener("click", () => {
    modal.close();
});

cerrarmodal.addEventListener("click", () => {
    const fechaIn = document.getElementById('fechaEntrada').value;
    const fechaOut = document.getElementById('fechaSalida').value;
    const cantiHuespedes = document.getElementById('huespedes').value;
    const metPago = document.getElementById('metodoPago').value;
    const codDesc = document.getElementById('codigoDesc').value;

    if (
        cantiHuespedes === '' || fechaIn === '' || fechaOut === '' || metPago === '' ||
        fechaIn <= currentDate || fechaOut <= currentDate || fechaOut <= fechaIn
    ) {
        
        swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Complete la información requerida o verifique las fechas.'
        });
        modal.close();
    } else {
        swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Se realizó la reserva con éxito.'
        });
        modal.close();
    }
});

/*Funcion para redirigir al html de registrar nueva tarjeta*/
function redirigir() {
    var select = document.getElementById("metodoPago");
    var selectedOption = select.options[select.selectedIndex].value;

    if (selectedOption === "nuevoMetodo") {
        window.location.href = "registroMetodo.html";
    }
}