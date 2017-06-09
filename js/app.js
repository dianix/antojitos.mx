var cargarPagina = function () {
    navigator.geolocation.getCurrentPosition(localizacion);
    mostrarRestaurantes(restaurantes);
    $(".lugar").click(ubicacionRestaurante); 
};

var iniciarMapa = function (ubicacion) {
    var mapaContenedor = $("#mapa")[0];
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
};

var localizacion = function (ubicacion) {
    var miUbicacion = {
        lat: ubicacion.coords.latitude,
        lng: ubicacion.coords.longitude
    }
    iniciarMapa(miUbicacion)
};

var filtrarRestaurantes = function (e) {
	e.preventDefault();
	var criterioBusqueda = $("#search").val().toLowerCase();
	var restaurantesFiltrados = restaurantes.filter(function (lugar) {
		return lugar.nombre.toLowerCase().indexOf(criterioBusqueda) >= 0;
	});
	mostrarRestaurantes(restaurantesFiltrados);
};

var restaurantes = [
    {
    "foto":"img/papaguapa.jpg",
    "nombre":"Papa Guapa",
    "direccion":"Av Oaxaca 81, Roma Nte., 06700 Ciudad de México, CDMX",
    "comida":"mexicana",
    "coordenadas":{"lat":"19.418992","lng":"-99.166953"}  
    },
    { 
    "foto":"img/rosetta.jpg",
    "nombre":"Panadería Rosetta",
    "direccion":"Colima 179, Cuauhtémoc, Roma Nte., 06700 Ciudad de México, CDMX",
    "comida":"francesa",
    "coordenadas":{"lat":"19.419889","lng":"-99.160533"}  
    },
    { 
    "foto":"img/chomp.jpg",
    "nombre":"Chomp Chomp",
    "direccion":"Calle Tonalá 91, Col.Roma Norte, Roma Nte., 06700 Cuauhtémoc, CDMX",
    "comida":"mexicana",
    "coordenadas":{"lat": "19.417133","lng":"-99.162583"}   
    },
    {
    "foto":"img/mapokalbi.jpg",
    "nombre":"Mapo Kal Bi",
    "direccion":"Calle Liverpool 185, Juárez, 06600 Ciudad de México, CDMX",
    "comida":"koreana",
    "coordenadas":{"lat": "19.423179","lng":"-99.166774"}  
    },
    { 
    "foto":"img/bisquets.jpg",
    "nombre":"Bisquets Obregon",
    "direccion":"Av. Álvaro Obregón 252, Roma Nte., 06700 Ciudad de México, CDMX",
    "comida":"mexicana",
    "coordenadas":{"lat":"19.416658" ,"lng":"-99.166692"}   
    },
    { 
    "foto":"img/wingstone.jpg",
    "nombre":"Wingstone",
    "direccion":"Av. Álvaro Obregón, Roma Nte., 06700 Ciudad de México, CDMX",
    "comida":"rapida",
    "coordenadas":{"lat":"19.416770" ,"lng":"-99.165481"}   
    }    
];

var plantillaRestaurante = '<article class="restaurante card hoverable grey lighten-5 row">' +
                                '<div class="col s3">' +
                                    '<img src="__foto__" alt="__nombrefoto__">' +
                                '</div>' +
                                '<div class="col s8 push-s1 m9">' +
                                    '<h5>__nombre__<i class="material-icons lugar" data-latitud="__latitud__" data-longitud="__longitud__">location_on</i></h5>' +
                                    '<p>__direccion__</p>' +
                                '</div>' +
                            '</article>';

var mostrarRestaurantes = function (restaurantes) {
    var plantillaFinal = "";
    restaurantes.forEach(function (restaurante) {
        //console.log(restaurante.coordenadas.lat)
        plantillaFinal += plantillaRestaurante.replace("__foto__", restaurante.foto)
            .replace("__nombrefoto__", restaurante.nombre)
            .replace("__latitud__", restaurante.coordenadas.lat)
            .replace("__longitud__", restaurante.coordenadas.lng)
            .replace("__nombre__", restaurante.nombre)
            .replace("__direccion__", restaurante.direccion);
    });
    $("#restaurantes").html(plantillaFinal);
};

function ubicacionRestaurante() {
    console.log($(this))
    var latitud = $(this).data("latitud");
    var longitud = $(this).data("longitud");
    //console.log(latitud)
    var coordenadas = {
        lat: latitud,
        lng: longitud
    }
    //console.log(coordenadas)
    iniciarMapa(coordenadas);
};
    
$(document).ready(cargarPagina);
    
    