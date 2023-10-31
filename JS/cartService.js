function agregarAlCarrito(servicio){
    const memoria = localStorage.getItem("Servicios");
    console.log(memoria);

    if (memoria == null){
        const nuevoServicio = servicio;
        nuevoServicio.cantidad = 1;
        localStorage.setItem("servicio",JSON.stringify([nuevoServicio]));
    }
};