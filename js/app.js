var map;

function initialize() {
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(20.5805905,-100.3998285)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

//jquery dom
$(document).ready(function(){
	//inicializa el pinche mapa
	initialize();
});