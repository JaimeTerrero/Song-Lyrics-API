import * as UI from './interfaz.js';

export class API{
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        Spinner();

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {
                if(resultado.lyrics){
                    const { lyrics } = resultado;
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letras de la canción ${this.cancion} de ${this.artista}`;
                }else{
                    UI.divMensaje.textContent = 'No se pudo encontrar la canción que buscabas, intenta de nuevo';
                    UI.divMensaje.classList.add('error');

                    setTimeout(() => {
                        UI.divMensaje.textContent = '';
                        UI.divMensaje.classList.remove('error');
                    }, 3000);
                }
            })
    }
}

function Spinner(){
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('spinner');

    divSpinner.innerHTML = `
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
    `;

    setTimeout(() => {
        divSpinner.remove();
    }, 2000);

    UI.divResultado.appendChild(divSpinner);
}