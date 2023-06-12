function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();           
    }
    else (elemento === null)
    console.log("esse elemento ou seletor não está registrado!")
     
}
const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown =  function(evento){           // onkeydown para eventos de teclado // 
        if(evento.code === "Enter"|| evento.code === "Space"){
            tecla.classList.add("ativa");
         }
    }
    tecla.onkeyup = function(){               // ação de soltar a tecla do teclado  // 
        tecla.classList.remove("ativa");
    }
}
