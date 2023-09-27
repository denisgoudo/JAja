function tocaSomPom (idElemetoAudio) {
    document.querySelector(idElemetoAudio).play();   
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const intrumento = tecla.classList[1];
    const idAudio = '#som_$(intrumento)';//template string

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

}