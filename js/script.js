var map = L.map('map', {
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


map.locate({
	setView: true,
	maxZoom: 15
});

var points = [];


/************** Location Descriptions *******************/
/* The array includes 
    [0] = name
    [1] = Description
    [2] = Practices    
*/

// Stillness
var paccarArray = ['<h1>Paccar Hall</h1>' +
	'<h2>Practices</h2>' +
	'<ul><li>Find a comfortable place to sit and observe the fire</li></ul>'
];
var griegArray = ['<h1>Grieg Garden</h1>' +
	'<p>This hidden space is especially cozy during springtime when rhododendrons and azaleas fill the area with a variety of colors. Enter the lush green space and you may find a number of different wildlife species, including heron nests. A statue of Norwegian composer Edvard Grieg looks out over the secluded space.</p>' +
	'<h2>Practices</h2>' +
	'<ul><li>Taste Meditation</li></ul>'
];
var sakumaArray = ['<h1>Sakuma Viewpoint</h1>' +
	'<h2>Practices</h2>' +
	'<ul><li>Listen to the water and observe things happen around</li></ul>'
];
var horticultureArray = ['<h1>Center for Urban Horticulture</h1>' +
	'<p>The Center for Urban Horticulture, administered by UW Botanic Gardens, offers 90 acres of demonstration gardens and natural areas, and houses the Miller Library and Hyde Herbarium. The Center serves as an educational hub for UW students, providing a base for research studies and classes, while also serving as a resource for the larger community.</p>'
];

// Creativity
var skyspaceArray = ['<h1>Henry Art Gallery Skyspace</h1>' +
	'<p>The James Turrell Skyspace, Light Reign, is one of the most popular and intriguing attractions at the Henry Art Gallery on UW campus. The space features an aperture in the ceiling, displaying the sky above. During the day, the space brings in a lot of light. In the past, the site has been used for meditation and art shows. The skyspace is never the same on any given day, as the light changes depending on the time of day and weather. At night, the exterior of the James Turrell Skyspace changes vibrant colors, like red, as you see in the photo above.</p>' +
	'<h2>Practices</h2>' +
	'<ul><li>Put on your favorite playlist and look up at the sky</li>' +
	'<li>Meditate</li></ul>'
];
var eccArray = ['<h1>Ethnic Cultural Center</h1>' +
	'<p>The Kelly Ethnic Cultural Theater has produced its own season of performances in the past, but is currently primarily a rental venue for cultural and performance organizations.  Priority is given to University of Washington student organizations and departmental cultural programming, however we always have available space for events and programs held by organizations in the greater-Seattle and national/international community.</p>' +
	'<h2>Practices</h2>' +
	'<ul><li>Appreciation of expressive art, stop in for any event that may be being held in the theater and seek inspiration through other’s organized artistic events.</li></ul>'
];
var wallDeathArray = ['<h1>Wall of Death</h1>' +
	'<p>The Wall of Death is an interesting and unique piece of art that can be found on UW’s campus underneath the University bridge. The sculpture features the “Wall of Death” sign with lavender spikes surrounding it. The sculpture is easily accessible by the Burke Gillman trail. Many are intrigued by the interesting use of space under the bridge.</p>' +
	'<h2>Practices</h2><ul><li>Look at the “Wall of Death” sign. Bring a notebook and write down “The Wall of Death” in different fonts and designs. Feel free to doodle and trail off from there. </li></ul>'
];
var parnassusArray = ['<h1>Parnassus Art Gallery Cafe</h1>' +
	'<p> Parnassus is the oldest cafe on the UW campus. Located in the basement of the art building, it features a small student art gallery and places to study or chat with friends. The cafe features Husky Grind coffee and other snacks for students to try.</p>' +
	'<h2>Practices</h2>' +
	'<ul><li>Take pictures of things around the cafe that catch your eye or attract your attention. Make note of why you found them interesting</li>' +
	'<li>Spend a minute looking around the room. Then, see how many things you can draw or write about using only what you remember seeing.</li>' +
	'<li>Spend a minute looking around the room and noticing what things people are doing, or what mood they seem to be in. Pick a genre of music that fits the mood of the cafe and listen to a few songs in that genre.</li></ul>'
];

// Stillness locations
var paccar = L.marker([47.6591, -122.3086]).bindPopup(paccarArray.toString());
grieg = L.marker([47.6562, -122.3066]).bindPopup(griegArray.toString());
sakuma = L.marker([47.651838, -122.314841]).bindPopup(sakumaArray.toString());
horticulture = L.marker([47.658474, -122.289997]).bindPopup(horticultureArray.toString());

// Creativity Locations 
var skyspace = L.marker([47.656312, -122.31180]).bindPopup(skyspaceArray.toString());
ecc = L.marker([47.655312, -122.314805]).bindPopup(eccArray.toString());
wallDeath = L.marker([47.655225, -122.318511]).bindPopup(wallDeathArray.toString());
parnassus = L.marker([47.658391, -122.306556]).bindPopup(parnassusArray.toString());

// Layer groups
var stillness = L.layerGroup([paccar, grieg, sakuma, horticulture]);
var creativity = L.layerGroup([skyspace, ecc, wallDeath, parnassus]);

// objects for the layers
var overlayMaps = {
	"Stillness": stillness,
	"Creativity": creativity
};

// Adds the layers to the map
L.control.layers(overlayMaps).addTo(map);