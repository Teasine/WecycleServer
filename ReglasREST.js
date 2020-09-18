// .....................................................................
// Autor: Santiago Pérez
// Fecha inicio: 07/12/2019
// Ultima actualización: 07/09/2020
// ReglasREST.js
// .....................................................................

const path = require('path')
const fs = require('fs');


module.exports.cargar = function (servidorExpress, laLogica) {

  // .......................................................
  // GET /prueba
  // .......................................................
  servidorExpress.get('/prueba', function (peticion, respuesta) {
    console.log(" * GET /prueba ")
    respuesta.send("¡Funciona!")
  }) // get /prueba

  // .......................................................
  // GET /obtenerContenedoresValencia
  // .......................................................
  servidorExpress.get('/obtenerContenedoresValencia/:distancia&:latitud&:longitud', async function (peticion, respuesta) {
    console.log(" * GET /obtenerContenedoresValencia ")

    var datos = { distancia: peticion.params.distancia, latitud: peticion.params.latitud, longitud: peticion.params.longitud }

    var res = await laLogica.getDatosContenedoresValencia(datos);

    respuesta.send(res);
  }) // get /obtenerContenedoresValencia

  // .......................................................
  // GET /politicasPrivacidad
  // .......................................................
  servidorExpress.get('/politicasPrivacidad', async function (peticion, respuesta) {
    console.log(" * GET /politicasPrivacidad ")

    fs.readFile('./html/politica_privacidad.html', function (err, data) {
      respuesta.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
      respuesta.write(data);
      respuesta.end();
    });

  }) // get /obtenerContenedoresValencia

}
// .....................................................................
// .....................................................................
