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
//= require turbolinks
//= require_tree .

function gmap_form() {
  handler = Gmaps.build('Google');    // map init
  handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
    if ($('#sighting_longitude').val() != '') {    // statement check - new or edit view
      markers = handler.addMarkers([    // print existent marker
        {
            "lat": $('#sighting_latitude').val(),
          "lng":  $('#sighting_longitude').val()

        }
      ]);
      handler.bounds.extendWith(markers);
      handler.fitMapToBounds();

    }
    else {    // show the empty map
      handler.fitMapToBounds();
      handler.map.centerOn([41.8026, -87.5986]);

    }
      handler.getMap().setZoom(15);
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

  google.maps.event.addListener(handler.getMap(), 'click', function(event) {    // event for click-put marker on map and pass coordinates to hidden fields in form
    placeMarker(event.latLng);
    document.getElementById("sighting_latitude").value = event.latLng.lat();
    document.getElementById("sighting_longitude").value = event.latLng.lng();
  });
}

gmap_form();
