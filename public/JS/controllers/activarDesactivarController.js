'use strict';

let listaNegocios = [];
const GetListaNegocios = async () => {
    let res = await ProcessGET('ListarNegocios', null);
    if (res != null && res.resultado == true) {
        listaNegocios = res.listaNegociosBD;

        ImprimirDatos();
    } else {
        ImprimirMsjsError(res.msj);
        return;
    }
};
GetListaNegocios();

const ImprimirDatos = () => {

    for (let i = 0; i < listaNegocios.length; i++) {
        if (listaNegocios[i].Estado == "desactivado"){
         // Crear elementos
         const contenedor = document.createElement('section');
         contenedor.classList.add('contenedor');
 
         const labels = document.createElement('div');
         labels.classList.add('labels');
 
         const nombreLabel = document.createElement('label');
         nombreLabel.id = 'nombreDelNegocioLabel';
         nombreLabel.textContent = 'Nombre del Negocio:';
 
         const nombreLabelTXT = document.createElement('label');
         nombreLabelTXT.id = 'nombreDelNegocioLabelTXT';

         nombreLabelTXT.textContent = listaNegocios[i].NombreNegocio;
 
         const br1 = document.createElement('br');
 
         const descripcionLabel = document.createElement('label');
         descripcionLabel.id = 'descripcionLabel';
         descripcionLabel.textContent = 'Descripción:';
 
         const descripcionLabelTXT = document.createElement('label');
         descripcionLabelTXT.id = 'descripcionLabelTXT';
         descripcionLabelTXT.textContent = listaNegocios[i].Descripcion;
 
         const br2 = document.createElement('br');
 
         const categoriaLabel = document.createElement('label');
         categoriaLabel.id = 'categoriaLabel';
         categoriaLabel.textContent = 'Categoría:';
 
         const categoriaLabelTXT = document.createElement('label');
         categoriaLabelTXT.id = 'categoriaLabelTXT';
         categoriaLabelTXT.textContent = listaNegocios[i].Categoria;
 
         const br3 = document.createElement('br');
 
/*          const direccionLabel = document.createElement('label');
         direccionLabel.id = 'direccionLabel';
         direccionLabel.textContent = 'Dirección:';
 
         const direccionLabelTXT = document.createElement('label');
         direccionLabelTXT.id = 'direccionLabelTXT';
         direccionLabelTXT.textContent = 'Dirección del negocio1'; */
 
         const imagenContainer = document.createElement('div');
         imagenContainer.classList.add('imagen-container');
 
         const imagen = document.createElement('img');
         imagen.src = listaNegocios[i].FotosNegocio;
         imagen.alt = 'Imagen del negocio';
         imagen.id = 'imagen';
 
         const botones = document.createElement('div');
         botones.classList.add('botones');
 
         const aprobarBoton = document.createElement('button');
         aprobarBoton.id = 'aprobarBoton';
         aprobarBoton.textContent = 'Aprobar';
         aprobarBoton.onclick = async () => {
            let confirmacion = false;
            await Swal.fire({
                title: 'Desea Aprobar el registro de ' + listaNegocios[i].NombreNegocio,
                icon: 'warning',
                confirmButtonText: 'Confirmar',
                denyButtonText: 'Cancelar',
                showDenyButton: true
            }).then((res) =>{
                confirmacion = res.isConfirmed;
            });

            if (confirmacion == true) {
                let data = {
                    '_id': listaNegocios[i]._id
                };

                let result = await ProcessPUT('ActivarNegocio', data);
                if (result != null && result.resultado == true) {
                    ImprimirMsjsSuccess(result.msj);
                } else {
                    ImprimirMsjsError(result.msj);
                }
                location.href = 'activarDenegarNegocios.html';
            }
        }
         
         
         
         const rechazarBoton = document.createElement('button');
         rechazarBoton.id = 'rechazarBoton';
         rechazarBoton.textContent = 'Rechazar';
         rechazarBoton.onclick = async () => {
             let confirmacion = false;
             await Swal.fire({
                 title: 'Desea Rechazar el registro de ' + listaNegocios[i].NombreNegocio,
                 icon: 'warning',
                 confirmButtonText: 'Confirmar',
                 denyButtonText: 'Cancelar',
                 showDenyButton: true
             }).then((res) =>{
                 confirmacion = res.isConfirmed;
             });
 
             if (confirmacion == true) {
                 let data = {
                     '_id': listaNegocios[i]._id
                 };
 
                 let result = await ProcessPUT('DesactivarNegocio', data);
                 if (result != null && result.resultado == true) {
                     ImprimirMsjsSuccess(result.msj);
                 } else {
                     ImprimirMsjsError(result.msj);
                 }
                 location.href = 'activarDenegarNegocios.html';
         }
        }


 
         // Agregar elementos al DOM
         labels.appendChild(nombreLabel);
         labels.appendChild(nombreLabelTXT);
         labels.appendChild(br1);
         labels.appendChild(descripcionLabel);
         labels.appendChild(descripcionLabelTXT);
         labels.appendChild(br2);
         labels.appendChild(categoriaLabel);
         labels.appendChild(categoriaLabelTXT);
         labels.appendChild(br3);
/*          labels.appendChild(direccionLabel);
         labels.appendChild(direccionLabelTXT); */
 
         imagenContainer.appendChild(imagen);
 
         botones.appendChild(aprobarBoton);
         botones.appendChild(rechazarBoton);
 
         contenedor.appendChild(labels);
         contenedor.appendChild(imagenContainer);
         contenedor.appendChild(botones);
 
         document.querySelector('main').appendChild(contenedor);
    }
    }
}
