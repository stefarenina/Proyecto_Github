'use strict';

const metodoPagoForm = document.getElementById('metodoPagoForm') || null;
const formularioRecuperar = document.getElementById('restaurarFormulario') || null;

if (metodoPagoForm) {
    metodoPagoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const nombreTarjeta = document.getElementById('nombre_tarjeta').value;
        const numeroTarjeta = document.getElementById('numero_tarjeta').value;
        const fechaVencimiento = document.getElementById('fecha_vencimiento').value;
        const cvv = document.getElementById('cvv').value;

        const currentDate = new Date();
        console.log("asdas" + currentDate);
        console.log(fechaVencimiento);
        const fechaVencimientoDate = new Date(fechaVencimiento);

        if (
            nombreTarjeta === '' || numeroTarjeta === '' || fechaVencimiento === '' || cvv === '' ||
            fechaVencimientoDate <= currentDate
        ) {
            swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Complete la información requerida o verifique la fecha de vencimiento.'
            });
        } else {
            RegistrarMetodo();
        }
    });
}

if (formularioRecuperar) {
formularioRecuperar.addEventListener("submit", (event) => {
    event.preventDefault();
    const correoID = document.getElementById("email").value;
    if (
        correoID === ''
    ) {
        swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Complete la información requerida.'
        });
    } else {
        swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Se envió un correo para recuperar la contraseña.'
        });
    }
});
}