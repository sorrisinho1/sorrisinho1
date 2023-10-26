function tocaSOMPOM (idElementoAudio) {

    document.querySelector(idElementoAudio).play();
 }
document.querySelectorAll('tecla');

const LISTADETECLAS = document.querySelectorAll("tecla");

let contador = 0;

//enquanto
while(contador < 9) {
   LISTADETECLAS[0].onclick = tocaSOMPOM;

   contador = contador + 1;

console.log(contador);

}

