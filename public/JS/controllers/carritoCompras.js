'use strict';

let modal = document.querySelector("#modal");
let cerrarModal = document.getElementById('closeModal');


cerrarModal.addEventListener('click', () => {
    modal.style.display = "none";
})

function MetodoPagoChange() {
    let selectInput = document.getElementById("select1");
    if (selectInput.value == 'opcion1') {
        modal.style.display = "block";
    }else if (selectInput.value == 'opcion2') {
        window.location.href = 'registroMetodo.html';
    }else {
        modal.style.display = "none";
    }
}

let btnPagar= document.getElementById('btnPagar');

const ModificarDatosReserva = async () => {
    let sEstado = true;

    let res = null;
    let dataBody = {
        'Estado': sEstado,
    };

    res = await ProcessPUTReservas('ModificarReserva', dataBody, null);

    swal.fire({
        icon: 'success',
        title: 'Excelente!',
        text: res.msj,
        confirmButtonText: 'Ok'
    }).then(resSwetAlert => {
        location.href = 'misReservas.html'

        limpiarCarrito();
    });
};


const limpiarCarrito = async () => {
    await ProcessPUT('LimpiarCart');
}


btnPagar.addEventListener('click', ModificarDatosReserva);