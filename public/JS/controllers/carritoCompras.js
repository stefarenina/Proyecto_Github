'use strict';

let modal = document.querySelector("#modal");
let cerrarModal = document.getElementById('closeModal');

cerrarModal.addEventListener('click', () => {
    modal.style.display = "none";
})

function MetodoPagoChange() {
    let selectInput = document.getElementById("select1");
    let selectValue = selectInput.value;
    if (selectInput.value == 'opcion1') {
        modal.style.display = "block";
    }else if (selectInput.value == 'opcion2') {
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




