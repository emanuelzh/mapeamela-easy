var map;

function initialize() {
  var mapOptions = {
    zoom: 18,
    center: new google.maps.LatLng(-34.397, 150.644)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

//jquery dom
$(document).ready(function(){

	//inicializa el pinche mapa
	initialize();

});