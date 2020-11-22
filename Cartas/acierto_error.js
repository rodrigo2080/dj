/**var arrayAnidado = [
  ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"],
  ["😻", "🧠", "👀", "🧐", "😷", "🍉", "🥑", "🥬"],
  ["🤡", "💩", "🎃", "🙀", "🏀", "🤠", "😽", "😼"],
];**/

//

//console.log(elemento, indice); //nos entrega el elemento y su posicion

//console.log(arrayAnidado[2][6]);

function acierto(lasTarjetas) {
  lasTarjetas.forEach(function (elemento) {
    elemento.classList.add("acertada");
  });
}

function error(lasTarjetas) {
  lasTarjetas.forEach(function (elemento) {
    elemento.classList.add("error");
  });

  setTimeout(function () {
    lasTarjetas.forEach(function (elemento) {
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error");
    });
  }, 1000);
}
