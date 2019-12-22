const sqlite3 = require("sqlite3")
const bodyParser = require('body-parser')
const fs = require('fs')

//Leer el archivo json
fs.readFile('JsonContenedores/valencia.json', (err, data) => {
    if (err) throw err;
    let datos = JSON.parse(data)
    //Tipo de contenedor
    console.log("Tipo de contenedor: " + datos.features[0].properties.tipo_resid);

    //Localizacion Contenedor
    //UTM X
    console.log("UTMX: " + datos.features[0].geometry.coordinates[0]);
    //UMT Y
    console.log("UMTY: " + datos.features[0].geometry.coordinates[1]);
});

/*
// abrir base de datos
let db = new sqlite3.Database("../../bd/datos.db", (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Conectado a datos.db ');
});

db.run(textoSQL);

console.log("------ Añadir contenedores a la bd --------");

var textoSQL = 'insert into Contenedores values( $IdTipoContenedor, $Ciudad, $Latitud, $Longitud, $Horario);'

for (var longitud = -0.5; longitud <= 0.5; longitud = longitud + 0.1) {
    
        var valoresParaSQL = {
            $IdTipoContenedor: medida,
            $Ciudad: 1,
            $Latitud: latitud,
            $Longitud: longitud,
            $Horario: 1,
        }
    
    db.run(textoSQL, valoresParaSQL);
}

// cerra la conexión con la base de datos
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Cerrando la conexión a la bd');
});*/