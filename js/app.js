var geocoder;
var map;
var lnq = new google.maps.LatLng(20.592798,-100.390231);
var marker;
var markers=[];
var infowindow;

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

    set_markers(map);

}

//carga los markers contenidos en un dataset
function set_markers(mapa) {

	//infowindow general
	infowindow = new google.maps.InfoWindow({
		content : "Holding..."
	});

	$.get('data.php',function(response){

		if(response.status == 200) {
			console.log(response.data);
			var locations = response.data;
			
			for (var i = 0; i < locations.length; i++) {
			    var evento = locations[i];
			    var myLatLng = new google.maps.LatLng(evento.lat, evento.lng);
			    
			    var mrk = new google.maps.Marker({
			        position: myLatLng,
			        map: map,
			        icon: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png',
			        title: 'Tipo: '+evento.tipo_nombre
			    });
			    mrk.el_contenido = create_infowindow(evento.tipo_nombre, evento.fecha_hora, evento.descripcion);
			    markers[i] = mrk;
			    google.maps.event.addListener(markers[i], 'click', function(){
			    	infowindow.setContent(this.el_contenido);
			    	infowindow.open(map, this);
			    	map.setCenter(this.getPosition());
			    });
			}
			
		}

	});
}

//crear un info windows
function create_infowindow(tipo, fecha, desc) {
	var ff = moment(fecha);
	var wrapper = $("<div></div>");
	var titulo = $("<h3></h3>").text(tipo);
	var fechora = $("<h4></h4>").text(ff.format("DD [de] MMMM YYYY, hh:mmA"));
	var desc = $("<p></p>").text(desc);
	var info = $("<div></div>").append(titulo).append(fechora).append(desc);
	wrapper.append(info);
	return wrapper.html();
}

//envia el mapeo a la base de datos
function enviar() {

	//datos del form
	var the_data = {
		lat : marker.getPosition().lat(),
		lng : marker.getPosition().lng(),
		fecha : $("[name='fecha_submit']").val()+' '+$("[name='hora_submit']").val()+':00',
		tipo : $("#tipo").val(),
		desc : $("#descr").val()
	};

	console.log(the_data);

	//post
	$.post('process.php',the_data,function(response){
		if(response.status = 200) {
			bootbox.alert('Envío exitoso. Gracias por tu participación !!', function(){
				location.reload();
			});
		} else {
			bootbox.alert('Error al enviar. Verifica la información.');
		}
	});

}

//jquery dom
$(document).ready(function(){

	//pickadate
	$("#fecha").pickadate({
		formatSubmit : 'yyyy-mm-dd'
	});
	$("#hora").pickatime({
		formatSubmit : 'HH:i'
	});

	//inicializa el pinche mapa
	initialize();

	//enviar
	$("#enviar").click(function(e){
		e.preventDefault();

		//validar primero

		//procesar el form
		enviar();
	});

	create_infowindow('Robo');
});