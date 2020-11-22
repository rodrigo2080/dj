/*
var saludo = "Hola, mi nombre es ";
var nombre = "Santiago";

var mensaje = saludo + nombre;

console.log(mensaje);
*/

/*
var nombre = "Santi";
var fecha = 1983;
var edad = 2019 - fecha;
*/

function recogeDatos(evento) {
  evento.preventDefault();

  var nombre = document.querySelector("#nombre").value;
  var año = document.querySelector("#fecha").value;
  var edad = 2020 - año;
  var bienvenida = document.querySelector("#bienvenida");
  var mensajeEdad;
  var mensaje; //= "<p>Hola " + nombre + ", tienes " + edad + " años</p>";

  if (edad > 30) {
    mensajeEdad = "abuelo";
  } else if (edad < 30) {
    mensajeEdad = "jovenzuelo";
  } else {
    mensajeEdad = "no me lo creo";
  }

  mensaje =
    "<p>Hola " + nombre + ", tienes" + edad + " años," + mensajeEdad + ".</p>";

  bienvenida.innerHTML = mensaje;
}

var miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);
