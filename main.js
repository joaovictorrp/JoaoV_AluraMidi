//Pom-------------------------------------------
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < 9) {
    ListaDeTeclas[0].onclick = tocaSomPom;

    contador = contador + 1;

    console.log(contador);
}