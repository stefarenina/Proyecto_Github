'use strict';

let listaNegocios = [];
let _id;
let sesion;
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
const GetData = async () => {

    sesion = GetSesionActiva();
    _id = sesion._id;

    };
GetData();
const ImprimirDatos = () => {

    for (let i = 0; i < listaNegocios.length; i++) {
        //console.log("1" + " " +listaNegocios[i]._id )
        //console.log("2" + " " + _id)
        if (listaNegocios[i].Dueño == _id){
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
         aprobarBoton.textContent = 'Visitar Perfil de Negocio';
         aprobarBoton.onclick = async () => {
            let idNegocio = listaNegocios[i]._id;
            let url = 'registrarReserva.html?_id=' + idNegocio;
    
            // Crear enlace
            let enlace = document.createElement('a');
            enlace.href = url;
            enlace.id = 'miEnlace';  // Asignar un id al enlace
            aprobarBoton.appendChild(enlace);
    
            // Redireccionar a la nueva página
            window.location.href = url;
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

 
         contenedor.appendChild(labels);
         contenedor.appendChild(imagenContainer);
         contenedor.appendChild(botones);
 
         document.querySelector('main').appendChild(contenedor);
    }
    }
}
