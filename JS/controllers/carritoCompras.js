'use strict';

let modal = document.querySelector("#modal");

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};



function MetodoPagoChange() {
    let selectInput = document.getElementById("metodoPago");
    if (selectInput.value == 'tarjeta') {
        modal.style.display = "block";
    }else if (selectInput.value == 'nuevoMetodo') {
        window.location.href = 'registroMetodo.html';
    }else {
        modal.style.display = "none";
    }
}


function pagar(){
    swal.fire({
        icon: 'success',
        title: 'Pago Realizado',
        text: 'Se le enviara un correo electronico con la factura'
    });
}

function agregarTarjeta() {
    swal.fire({
        icon: 'success',
        title: 'Metodo de pago valido',
        text: 'Procede con el pago ahora'
    });
    modal.style.display = "none";
}
