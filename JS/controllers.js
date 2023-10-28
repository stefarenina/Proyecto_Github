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

/*Funcion para abrir modal de realizar reserva*/

document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modal = document.getElementById("modal");

    openModalBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    function closeModal() {
        modal.style.display = "none";
    }

    window.submitForm = function () {
        // Aquí puedes agregar el código para procesar el formulario antes de cerrar el modal
        closeModal();
        return false; // Evitar que el formulario se envíe de forma convencional
    };

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
