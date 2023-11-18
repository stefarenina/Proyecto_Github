'use strict';

let label = document.getElementById("statusImg")
let stringDir = document.getElementById("negocioFotos");

let widgetCloudinary = cloudinary.createUploadWidget({
    cloudName: 'djj1whfh2',
    uploadPreset: 'preset',
    multiple: false 
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con exito', result.info);
        label.innerText = "Imagen subida con éxito";
        stringDir.src = result.info.secure_url;
        stringDir.alt = "changed"
        console.log (stringDir)
    }
});

function AbrirCloudinary(pIdInputImagen) {
    imagen = document.getElementById(pIdInputImagen);
    widgetCloudinary.open(); 
}