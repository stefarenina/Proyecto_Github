'use strict';


const ventana = document.getElementById("ventana");

const botonesEliminar = document.querySelectorAll(".eliminarBoton");

const confirmarEliminacion = document.getElementById("afirmativoEliminar");
const recharazarEliminacion =  document.getElementById("negativoEliminar");

const reporteBoton = document.getElementById("reporteBoton");

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
        text: 'Se ha eliminado este dato'
    });    
});

recharazarEliminacion.addEventListener("click", () => {
    ventana.close();   
});

reporteBoton.addEventListener("click", () => {
    swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Se ha generado un reporte'
    }); 
});