// ............................................................................
  //  String:lat, String:long --> calcularDistancia() --> JSON
  // ............................................................................

    lat1 = 39.472988
    lon1 = -0.357551
    lat2 = 39.46321989
    lon2 = -0.33431057
    rad = function (x) { return x * Math.PI / 180; }
    var R = 6378.137; //Radio de la tierra en km
    var dLat = rad(lat2 - lat1);
    var dLong = rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    console.log(d.toFixed(3)); //Tiene que dar 2.27 Km (DEVUELVE EN KM)
    