var map = L.map('map').setView([47.654, -122.31], 16);

/*
Initilizes the map
(Note to front end team: This block is from map demo's source code)
*/ 
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hvdGFzaGltaXp1dXUiLCJhIjoiY2p5b3FoZTFnMDByeDNscXRnZ2Y3bHdzeCJ9.vtZCutjwiUMaJ6rhD52J-Q', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(map);

// Shows user's bathroom
function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

// Shows error message when geolocation fails and sets default view to UW
function onLocationError(e) {
    alert(e.message);
    map.setView([47.654, -122.31], 16);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

map.locate({setView: true, maxZoom: 16});

var points = [];

