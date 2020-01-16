// .....................................................................
// Autor: Santiago Pérez
// Fecha inicio: 07/12/2019
// Última actualización: 07/12/2019
// Logica.js
// .....................................................................
const sqlite3 = require("sqlite3")
/*const SimpleCrypto = require("simple-crypto-js").default;*/
// .....................................................................
// .....................................................................


module.exports = class Logica {

  // .................................................................
  // menorBD: Texto
  // -->
  // constructor () -->
  // .................................................................
  constructor(nombreBD, cb) {
    this.laConexion = new sqlite3.Database(
      nombreBD,
      (err) => {
        if (!err) {
          this.laConexion.run("PRAGMA foreign_keys = ON")
        }
        cb(err)
      })
  } // ()

  // ............................................................................
  //  String:lat, String:long --> getDatosContenedoresValencia() --> JSON
  // ............................................................................
  async getDatosContenedoresValencia(datos) {

    var distanciaUsuario = datos.distancia;
    var latUsuario = datos.latitud;
    var lonUsuario = datos.longitud;

    var textoSQL = "select * from ContenedoresValencia";

    var valoresParaSQL = {}

    return new Promise((resolver, rechazar) => {
      this.laConexion.all(textoSQL, valoresParaSQL,
        (err, res) => {

          if (err) { rechazar(err) }

          var contenedoresCercanos = this.obtenerContenedoresCercanos(distanciaUsuario,latUsuario,lonUsuario,res);
          resolver(contenedoresCercanos)

        })

    })
  }

  // ............................................................................
  //  JSON --> obtenerContenedoresCercanos() --> JSON
  // ............................................................................
  async obtenerContenedoresCercanos(distanciaUsuario,lat1,lon1,todosLosContenedores) {

    /*var lat1 = 39.470868;
    var lon1 = -0.358238;*/

    var res = [];

    //Recorrer el json
    todosLosContenedores.forEach(element => {

      var lat2 = element.Latitud;
      var lon2 = element.Longitud;

      var distancia = this.calcularDistancia(lat1, lon1, lat2, lon2)

      if (distancia <= distanciaUsuario) {
        res.push(element);
      }

    });

    //Devolver solo los contenedores más cercanos
    return res;
  }


  // ............................................................................
  //  String:lat, String:long --> calcularDistancia() --> Double
  // ............................................................................
  calcularDistancia(lat1, lon1, lat2, lon2) {
    var rad = function (x) { return x * Math.PI / 180; }
    var R = 6378.137; //Radio de la tierra en km
    var dLat = rad(lat2 - lat1);
    var dLong = rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    var res = d.toFixed(2)
    return res; //Retorna dos decimales en Km
  }

  // .................................................................
  // cerrar() -->
  // .................................................................
  cerrar() {
    return new Promise((resolver, rechazar) => {
      this.laConexion.close((err) => {
        (err ? rechazar(err) : resolver())
      })
    })
  } // ()

} // class
// .....................................................................
// .....................................................................
