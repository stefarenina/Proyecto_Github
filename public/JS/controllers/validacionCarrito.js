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
        let modal = document.querySelector("#modal");

        if (
            nombreTarjeta === '' || numeroTarjeta === '' || fechaVencimiento === '' || cvv === '') {
            swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Complete la información requerida o verifique la fecha de vencimiento.'
            });
        } else {
            swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Se registró el método de pago con éxito.'
            });
            modal.style.display = "none";
        }
        
    });
}
