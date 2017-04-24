(function() {
  var map = new google.maps.Map(document.querySelector('.map-wrapper')),
    preloader = document.querySelector('.preload-wrapper'),

    //import the geocode api
    geocoder = new google.maps.Geocoder(),
    geocodeButton = document.querySelector('.geocode'),

    // directons display
    directionsService = new google.maps.DirectionsService(),
    directionsDisplay,
    locations = [],

    icons = {
    start: new google.maps.MarkerImage(
     'images/lighthouseMarker.png'
   ),
    end: new google.maps.MarkerImage(
     // URL
     'images/anchorMarker.png'
    )
},

    marker;

  function initMap(position){
    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    var styledMapType = new google.maps.StyledMapType(
        [
          {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#577442"
              }
            ]
          },
          {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#85977a"
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#8bbb74"
              }
            ]
          },
          {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#6aa361"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#dac394"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#66b2e1"
              }
            ]
          }
        ],
        {name: 'Styled Map'});

    //save our location
    locations[0] = { lat: 44.4999278, lng: -81.3735134};

    directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
    directionsDisplay.setMap(map);

    map.setCenter({ lat: 44.4999278, lng: -81.3735134 });
    map.setZoom(13);
    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    //Chantry info window
    var contentString =
      '<h1 class="windowInfoHeading">Chantry Island Tours</h1>'+
      '86 Saugeen St, Southampton ON' +
      '<br>ON N0H 2L0'+
      '<br><b><a href="tel:1-866-767-5862">(519) 797-5862</a></b>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });


    marker = new google.maps.Marker({
      position: { lat: 44.4999278, lng: -81.3735134 },
      map: map,
      animation: google.maps.Animation.DROP,
      icon : "images/lighthouseMarker.png",
      title: "Chantry Island"
    });

    preloader.classList.add('hide-preloader');
    infowindow.open(map, marker);

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(initMap, handleError); // success and error callback
}else {
  console.log('we were on a break!');
}

function handleError(){
  console.log('something went wrong');
}

function codeAddress() {
  var address = document.querySelector('.address').value;

  geocoder.geocode({ 'address' : address}, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK){
      //push location into array
      locations[1] = { lat: results[0].geometry.location.lat(),
                        lng: results[0].geometry.location.lng()
                      };

      map.setCenter(results[0].geometry.location);

      if(marker){
        marker.setMap(null);

        marker = new google.maps.Marker({
          map: map,
          animation: google.maps.Animation.DROP,
          icon: 'images/anchorMarker.png',
          position: results[0].geometry.location
        });

        calcRoute(results[0].geometry.location);

      }else{
        console.log('Geocode not successful for the following reason:', status);
      }
    }
  });
}

function calcRoute(codedLoc) {
  var request = {
    origin: locations[0], //this is Chantry Island's set location
    destination: locations[1], //address you put in
    travelMode: 'DRIVING' //tell it that we are driving
  };

  directionsService.route(request, function (response, status) { //pass it into the object
    if (status == 'OK') {
      directionsDisplay.setDirections(response);
      var distanceMeters = response.routes[0].legs[0].distance.value;
      console.log (distanceMeters/1000);
      var leg = response.routes[ 0 ].legs[ 0 ];
      makeMarker( leg.start_location, icons.start, "Chantry Island" );
      makeMarker( leg.end_location, icons.end, 'Submited location' );

      directionsDisplay.setOptions(
        {
          polylineOptions: {
          strokeWeight: 4,
          strokeColor:  '#9a1e22'
          }
        }
      );
    }

  });
function makeMarker( position, icon, title ) {
 new google.maps.Marker({
   position: position,
   map: map,
   icon: icon,
   title: title,
   animation: google.maps.Animation.DROP
  });
}
}

geocodeButton.addEventListener('click', codeAddress, false);
})();
