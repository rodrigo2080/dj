function barajaTarjetas() {
  var resultado;

  resultado = totalTarjetas.sort(function () {
    return 0.5 - Math.random();
  });

  return resultado;
}

function reparteTarjetas() {
  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajaTarjetas();

  mesa.innerHTML = ""; //deja vacio el html

  totalTarjetas.forEach(function (elemento) {
    var tarjeta = document.createElement("div"); //crea un div, puede ser otra cosa

    tarjeta.innerHTML =
      "<div class='tarjeta' data-valor=" +
      elemento +
      ">" +
      "<div class='tarjeta__contenido'>" +
      elemento +
      "</div>" +
      "</div>"; //le da un valor al div que creamos

    mesa.appendChild(tarjeta);
  });
}
