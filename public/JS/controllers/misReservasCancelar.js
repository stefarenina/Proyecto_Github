'use strict';

let modal = document.querySelector("#modal");
let salir = document.getElementById("btnAtras");

window.onclick = (event) => {
    if (event.target == modal) {
        modal.close();
    }
};

salir.addEventListener("click", () => {
    modal.close();
});


function CancelarReserva(){
    modal.showModal();
};


function ConfirmarCancelacion(){
    swal.fire({
        icon: 'success',
        title: 'Realizado',
        text: 'Su reserva fue cancelada con éxito. Aqui tiene su vale de cancelacion: 896YSO0'
    });
    modal.close();
}