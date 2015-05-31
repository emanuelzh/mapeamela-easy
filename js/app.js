var geocoder;
var map;
var lnq = new google.maps.LatLng(20.5805905,-100.3998285);
var marker;

//inicializa los servicios de google maps
function initialize() {
	geocoder = new google.maps.Geocoder();
  	var mapOptions = {
    	zoom: 14,
    	center: lnq
  	};
  	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  	//emplazar el marker en el centro del mapa
  	marker = new google.maps.Marker({
  		map: map,
        position: map.getCenter(),
        draggable : true
    });

    //el event listener del marker
    google.maps.event.addListener(marker, 'dragend', function(){
    	map.setCenter(marker.getPosition());
    });
}

function enviar() {

	//datos del form
	var the_data = {
		lat : marker.getPosition().lat(),
		lng : marker.getPosition().lng(),
		tipo : $("#tipo").val()
	};

	console.log(the_data);

	//post
	$.post('process.php',the_data,function(response){
		console.log(response);
	});

}

//jquery dom
$(document).ready(function(){

	//pickadate
	$("#fecha").pickadate();
	$("#hora").pickatime();

	//inicializa el pinche mapa
	initialize();

	//enviar
	$("#enviar").click(function(e){
		e.preventDefault();

		//validar primero

		//procesar el form
		enviar();
	})
});