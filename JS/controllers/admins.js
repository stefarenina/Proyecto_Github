'use strict';


const ventana = document.getElementById("ventana");

const botonesEliminar = document.querySelectorAll(".eliminarBoton");

const confirmarEliminacion = document.getElementById("afirmativoEliminar");
const recharazarEliminacion =  document.getElementById("negativoEliminar");

botonesEliminar.forEach(function(boton) {
    boton.addEventListener('click', function() {
        ventana.showModal();
    });
});



confirmarEliminacion.addEventListener("click", () => {
    ventana.close();
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Se ha eliminado el usuario'
    });    
});

recharazarEliminacion.addEventListener("click", () => {
    ventana.close();   
});

