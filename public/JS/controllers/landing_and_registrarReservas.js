'use strict';
/*Funcion para seccion de contacto de landingPageGrupo*/
const Contactarnos = () => {
    let names = document.getElementById('Nombre').value;
    let correo = document.getElementById('Correo').value;
    let mensaje = document.getElementById('Mensaje').value;

    if (names == '' || names == 'null' || names == 'undefined' ||
        correo == '' || correo == 'null' || correo == 'undefined' ||
        mensaje == '' || mensaje == 'null' || mensaje == 'undefined') {
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
    const fechadateIN = new Date(fechaIn);
    const fechadateOUT = new Date(fechaOut);

    if (
        cantiHuespedes === '' || fechaIn === '' || fechaOut === '' ||
        fechadateIN < currentDate || fechadateOUT < currentDate || fechadateOUT < fechadateIN
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

/*Funcion MENU COMPARTIR*/
let boton = document.getElementById("btnCompartir");
let menu = document.getElementById("menuDesplegable");

boton.addEventListener("click", function (event) {
    event.stopPropagation();

    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

document.addEventListener("click", function (event) {
    if (menu.style.display === "block" && event.target !== boton) {
        menu.style.display = "none";
    }
});
/*Funcion copiar link*/
let copiarLink = document.querySelector("#menuDesplegable ul li:nth-child(3) a");

copiarLink.addEventListener("click", function () {
    let enlace = window.location.href;

    let input = document.createElement("input");
    input.value = enlace;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Enlace copiado al portapapeles',
        showConfirmButton: false,
        timer: 1500
    })
});