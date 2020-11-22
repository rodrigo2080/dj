/*
function mensaje() {
  var saludo = "Mucho gusto";

  var antisaludo = "No te quiero ver";

  var contento = false;

  if (contento === true) {
    console.log(saludo);
  } else {
    console.log(antisaludo);
  }
}

mensaje();


var nombres = ["Santiago", "Clau", "iKer"];

function mensaje(nombre) {
  console.log("Hola, " + nombre);
}

nombres.forEach(function (valor) {
  mensaje(valor);
});



var coche = {
  marca: "Nissan",
  motor: "Bencina",
  acelerar: function () {
    console.log("brum brum");
  },
};


//Acceso al dom

var encabezado = document.querySelector("h1");

encabezado.textContent = "Hola iKer";

//console.log(encabezado); Manejando la consola en mozilla

*/

function cambiaColor() {
  this.classList.toggle(cambia);
}

document.querySelector("h1").addEventListener("click", cambiaColor);
