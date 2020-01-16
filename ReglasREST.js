// .....................................................................
// Autor: Santiago Pérez
// Fecha inicio: 07/12/2019
// Última actualización: 07/12/2019
// ReglasREST.js
// .....................................................................

const path = require('path')

module.exports.cargar = function(servidorExpress, laLogica) {

  // .......................................................
  // GET /prueba
  // .......................................................
  servidorExpress.get('/prueba', function(peticion, respuesta) {
    console.log(" * GET /prueba ")
    respuesta.send("¡Funciona!")
  }) // get /prueba

  // .......................................................
  // GET /prueba
  // .......................................................
  servidorExpress.get('/obtenerContenedoresValencia/:distancia&:latitud&:longitud', async function(peticion, respuesta) {
    console.log(" * GET /obtenerContenedoresValencia ")

    var datos = {distancia: peticion.params.distancia, latitud: peticion.params.latitud, longitud: peticion.params.longitud}

    var res = await laLogica.getDatosContenedoresValencia(datos);

    respuesta.send(res);
  }) // get /obtenerContenedoresValencia


}
// .....................................................................
// .....................................................................
