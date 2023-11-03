'use strict';

let modal = document.querySelector("#modal");
let salir = document.getElementById("btnConfirmar");

window.onclick = (event) => {
    if (event.target == modal) {
        modal.close();
    }
};


function anadirTarjeta(){
    let select1 = document.getElementById('anadirTarjeta');
    if (select1.value === "anadirTarjeta") {
        modal.showModal();
    }
}

salir.addEventListener("click", () => {
    modal.close();
});


function pagar(){
    swal.fire({
        icon: 'success',
        title: 'Pago Realizado',
        text: 'Se le enviara un correo electronico con la factura'
    });
}