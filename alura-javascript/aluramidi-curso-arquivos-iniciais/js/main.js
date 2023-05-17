function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}
// busca o elemento no Htlm //   sem () não executa a ação // 


const listaDeTeclas = document.querySelectorAll('.tecla');     // const = variavel constante como listas // 

let contador = 0;                                                       // let cria variaveis // 


while (contador< listaDeTeclas.length) {                           //length = le a quantidade de itens na lista // 
    listaDeTeclas[contador].onclick = tocaSomPom; 
    contador++;

    console.log(contador);
}