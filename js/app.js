import * as UI from './interfaz.js';
import {API} from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e){
    e.preventDefault();

    // Obtener datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;


    // Validar formulario
    if(artista === '' || cancion === ''){
        UI.divMensaje.textContent = 'Error... Todos los campos son obligatorios';
        UI.divMensaje.classList.add('error');

        setTimeout(() => {
            UI.divMensaje.textContent = '';
            UI.divMensaje.classList.remove('error');
        }, 3000);

        return;
    }

    // Consultar API
    const buscar = new API(artista, cancion);
    buscar.consultarAPI();
}