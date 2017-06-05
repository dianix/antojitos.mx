var cargarPagina = function () {
    navigator.geolocation.getCurrentPosition(localizacion);
}

var initMap = function (ubicacion) {
    console.log(ubicacion)
    var mapaContenedor = $("#mapa")[0];
    console.log(mapaContenedor)
    var mapa = new google.maps.Map(
        mapaContenedor, {
            zoom: 18,
            center: ubicacion
        }
    )
    var marcadorUbicacion = new google.maps.Marker({
        position: ubicacion,
        map: mapa
    })
}

var localizacion = function (ubicacion) {
    var miUbicacion = {
        lat: ubicacion.coords.latitude,
        lng: ubicacion.coords.longitude
    }
    initMap(miUbicacion)
}

$(document).ready(cargarPagina);
