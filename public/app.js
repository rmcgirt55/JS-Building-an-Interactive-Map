// create map

// Create map:                                                       
const myMap = L.map('map', {
    center: [48.868672, 2.342130],
    zoom: 12,
});

// add openstreetmap tiles
// Add OpenStreetMap tiles:
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(myMap);

// create and main add geolocation marker
// Create and add a geolocation marker:
const marker = L.marker([48.87007, 2.346453])
marker.addTo(myMap).bindPopup('<p1><b>The Hoxton, Paris</b></p1>').openPopup()


// draw the 2nd arrondissement
var latlngs =   [                                
[48.863368120198004, 2.3509079846928516],
[48.86933262048345, 2.3542531602919805],
[48.87199261164275, 2.3400569901592183],
[48.86993336274516, 2.3280142476578813],
[48.86834104280146, 2.330308418109664]
]
var polygon = L.polygon(latlngs, {color: 'red'}).addTo(myMap);

// create red pin marker
var myIcon = L.icon({
    iconUrl: 'assets/red-pin.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [-3, -76],
    // shadowUrl: 'my-icon-shadow.png',
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94]
});

// metro station markers
// Metro station markers:
const rS = L.marker([48.866200610611926, 2.352236247419453],{icon : myIcon}).bindPopup('RÃ©aumur-SÃ©bastopol')
const sSD = L.marker([48.869531786321566, 2.3528590208055196],{icon : myIcon}).bindPopup('Strasbourg-Saint-Denis')
const sentier = L.marker([48.8673721067762, 2.347107922912739],{icon : myIcon}).bindPopup('Sentier')
const bourse = L.marker([48.86868503971672, 2.3412285142058167],{icon : myIcon}).bindPopup('Bourse')
const qS = L.marker([48.869560129483226, 2.3358638645569543],{icon : myIcon}).bindPopup('Quatre Septembre')
const gB = L.marker([48.871282159004856, 2.3434818588892714],{icon : myIcon}).bindPopup('Grands Boulevards')

const stations = L.layerGroup([rS, sSD, sentier, bourse, qS, gB]).addTo(myMap)





//L.marker([rS, sSD, sentier, bourse, qS, gB],{icon: myIcon}).addTo(myMap)
