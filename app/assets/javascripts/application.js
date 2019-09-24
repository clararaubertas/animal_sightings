// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require_tree .

function gmap_form() {
    handler = Gmaps.build('Google');    // map init
    handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
	if (typeof(sightings) !== 'undefined')  {
	    handler.map.centerOn([41.8026, -87.5986]);
	    markers = handler.addMarkers(sightings);
	    handler.bounds.extendWith(markers);
	    handler.fitMapToBounds();
	    if (sightings.length == 1) {
		handler.getMap().setZoom(15);
	    }
	    
	}
 	else if (($('#sighting_longitude').val() !=''))
	{

	    markers = handler.addMarkers([    
		{
		    "lat": parseFloat($('#sighting_latitude').val()), 
		    "lng": parseFloat($('#sighting_longitude').val()) 

		}
	    ]);
	    setlistener();
	    handler.bounds.extendWith(markers);
	    handler.fitMapToBounds();
	    handler.getMap().setZoom(15);
	
	}
	else {    // show the empty map
	    
	    setlistener();
	    handler.map.centerOn([41.8026, -87.5986]);
	    handler.getMap().setZoom(15);
	}
});

    var markerOnMap;

    function placeMarker(location) {    // simply method for put new marker on map
	if (markerOnMap) {
	    markerOnMap.setPosition(location);
	}
	else {
	    markerOnMap = new google.maps.Marker({
		position: location,
		map: handler.getMap()
	    });
	}
    }

    function setlistener() {
    google.maps.event.addListener(handler.getMap(), 'click', function(event) {    // event for click-put marker on map and pass coordinates to hidden fields in form
	placeMarker(event.latLng);
	document.getElementById("sighting_latitude").value = event.latLng.lat();
	document.getElementById("sighting_longitude").value = event.latLng.lng();
    });
    }
}

$(document).ready(gmap_form);
