var map = L.map('map',{
    center: [47.653839, -122.307809],
    zoom: 15,
});

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
    map.setView([47.653839, -122.307809], 15);
}

map.on('locationfound', onLocationFound);


map.locate({setView: true, maxZoom: 15});

var points = [];


// Layer Groups

// Stillness locations
var paccar = L.marker([47.6591, -122.3086]).bindPopup('Paccar Hall');
    grieg = L.marker([47.6562, -122.3066]).bindPopup('Grieg Garden');
    sakuma = L.marker([47.651838, -122.314841]).bindPopup('Sakuma Viewpoint');
    horticulture = L.marker([47.658474, -122.289997]).bindPopup('Center for Urban Horticulture');

// Layer group for stillness
var stillness = L.layerGroup([paccar, grieg, sakuma, horticulture]);



// objects for the layers
var overlayMaps = {
    "Stillness": stillness
};


L.control.layers(overlayMaps).addTo(map);