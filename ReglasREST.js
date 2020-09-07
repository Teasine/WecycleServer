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
}
// .....................................................................
// .....................................................................
