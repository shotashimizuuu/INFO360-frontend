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

// Generative
var herbGardenArray = ['<h1>Medicinal Herb Garden</h1>' +
    '<p>The Medicinal Herb Garden, a vibrant 2-acre garden near Rainier Vista, was started in 1911 by the UW Department of Pharmacy. Inherited by the Botany* department in 1979, the garden retains a collection spanning 800 to 1,000 plant taxa today. The plants come from environments all around the world – dry grassland, tropical rainforest, mountain, and desert.  Reflecting their geographic diversity, the Medicinal Herb Garden plants are used in healing traditions across hundreds of cultures.</p>' +
    '<h2>Practices</h2>' + 
    '<ul><li>Empathetic Visualization: Imagine you are one of the objects or people around you.</li>' +
    '<li>Scent-imental contemplation: Think of a smell associated with a positive memory, and try to focus on it.</li>' +
    '<li>Stress Visualization: Visualize your stress as an abstract object, make it as simple or complex as you want.</li>' +
    '<li>Memory Alchemy: Transform an object of personal significance into a new memory.</li></ul>'
];
var sylvanArray = ['<h1>Sylvan Grove</h1>' +
    '<p>A low, stone stairway vanishing into the trees leads to the Sylvan Theater, the site of early-day graduation ceremonies. This tree-enclosed hideaway features a grassy stage set with the four white columns that once graced the front stoop of the original university building</p>' +
    '<h2>Practices</h2>' +
    '<ul><li>Meditation</li>' +
    '<li>Scent-imental contemplation</li></ul>'
];
var dockArray = ['<h1>Conibear Shellhouse Dock</h1>' +
    '<p>UW’s Conibear Shellhouse sits on the shores of Lake Washington and has served as the primary home for Washington Rowing since its construction in 1949.The shellhouse is located “on campus,” only a light 6-8 minute walk from Drumheller Fountain, at the center of the UW academic campus. Named for Hiram Conibear, the founding father of rowing at the UW, the shellhouse underwent a complete renovation in 2005 increasing space by 75 per cent to 47,250 square feet resulting in a unique, multi-purpose facility at the heart of the university’s athletic campus.</p>' +
    '<h2>Practices</h2>' +
    '<ul><li>Meditation</li>' +
    '<li>Scent-imental contemplation</li></ul>'
];
var henryArray = ['<h1>Henry Art Gallery</h1>' +
    '<h2>Practices</h2>' +
    '<ul><li>Meditation</li>' +
    '<li>Scent-imental contemplation</li></ul>'
]

// Stillness Markers
var paccar = L.marker([47.6591, -122.3086]).bindPopup(paccarArray.toString());
grieg = L.marker([47.6562, -122.3066]).bindPopup(griegArray.toString());
sakuma = L.marker([47.651838, -122.314841]).bindPopup(sakumaArray.toString());
horticulture = L.marker([47.658474, -122.289997]).bindPopup(horticultureArray.toString());

// Creativity Markers 
var skyspace = L.marker([47.656312, -122.31180]).bindPopup(skyspaceArray.toString());
ecc = L.marker([47.655312, -122.314805]).bindPopup(eccArray.toString());
wallDeath = L.marker([47.655225, -122.318511]).bindPopup(wallDeathArray.toString());
parnassus = L.marker([47.658391, -122.306556]).bindPopup(parnassusArray.toString());

// Generative Markers
var herbGarden = L.marker([47.652580, -122.307884]).bindPopup(herbGardenArray.toString()); 
var sylvan = L.marker([47.652705, -122.306400]).bindPopup(sylvanArray.toString());
var dock = L.marker([47.652742, -122.299895]).bindPopup(dockArray.toString());
var henry = L.marker([47.656149, -122.311776]).bindPopup(henryArray.toString());

// Layer groups
var stillness = L.layerGroup([paccar, grieg, sakuma, horticulture]);
var creativity = L.layerGroup([skyspace, ecc, wallDeath, parnassus]);
var generative = L.layerGroup([herbGarden, sylvan, dock, henry]);

// objects for the layers
var overlayMaps = {
	"Stillness": stillness,
    "Creativity": creativity,
    "Generative": generative
};

// Adds the layers to the map
L.control.layers(overlayMaps).addTo(map);