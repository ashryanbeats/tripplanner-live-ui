var map;
var restaurantLocations = [];
var thingToDoLocations = [];
var foodIconArray = [];
var thingsIconArray = [];

function initialize_gmaps() {
  // initialize new google maps LatLng object
  var myLatlng = new google.maps.LatLng(40.705189,-74.009209);
  // set the map options hash
  var mapOptions = {
    center: myLatlng,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styleArr
  };
  // get the maps div's HTML obj
  var map_canvas_obj = document.getElementById("map-canvas");
  // initialize a new Google Map with the options
  map = new google.maps.Map(map_canvas_obj, mapOptions);
}

$(document).ready(function() {
  initialize_gmaps();
});

var styleArr = [
  {
    'featureType': 'landscape',
    'stylers': [
      { 'saturation': -100 },
      { 'lightness': 60 }
    ]
  },
  {
    'featureType': 'road.local',
    'stylers': [
      { 'saturation': -100 },
      { 'lightness': 40 },
      { 'visibility': 'on' }
    ]
  },
  {
    'featureType': 'transit',
    'stylers': [
      { 'saturation': -100 },
      { 'visibility': 'simplified' }
    ]
  },
  {
    'featureType': 'administrative.province',
    'stylers': [
      { 'visibility': 'off' }
    ]
  },
  {
    'featureType': 'water',
    'stylers': [
      { 'visibility': 'on' },
      { 'lightness': 30 }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry.fill',
    'stylers': [
      { 'color': '#ef8c25' },
      { 'lightness': 40 }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry.stroke',
    'stylers': [
      { 'visibility': 'off' }
    ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'geometry.fill',
    'stylers': [
        { 'color': '#b6c54c' },
        { 'lightness': 40 },
        { 'saturation': -40 }
    ]
  }
];

function updateHotelMarker(location) {
  drawLocation(location, {
    icon: '/images/lodging_0star.png'
  });
}

function updateFoodMarkers(location) {
  // add new location to an array
  restaurantLocations.push(location);

  var newLocation = restaurantLocations[restaurantLocations.length - 1];

  drawLocation(newLocation, {icon: '/images/restaurant.png'}, foodIconArray);
}

function updateThingMarkers(location) {
  // add new location to an array
  thingToDoLocations.push(location);

  var newLocation = thingToDoLocations[thingToDoLocations.length - 1];

  drawLocation(newLocation, {icon: '/images/star-3.png'}, thingsIconArray);
}

function drawLocation (location, opts, iconArray) {
  opts.position = new google.maps.LatLng(location[0], location[1]);
  opts.map = map;
  var marker = new google.maps.Marker(opts);
  marker.setMap(map);
  iconArray.push(marker);
}

function removeIcon(ItemArray, num){
  var removeMarker = ItemArray[num];
  console.log("HI", ItemArray);
  removeMarker.setMap(null);
  var arr = ItemArray.filter(function(el){
    return el!==ItemArray[num];
  });
  return arr;
}

function removeItinerary(ItemArray, num){
  var arr = ItemArray.filter(function(el){
    return el!==ItemArray[num];
  });
  return arr;
}


function removeHotelMarker(location) {  //NEED TO UPDATE
  marker.setMap(null);
}

function removeFoodMarkers(mapIndex, $mapC) { //NEED TO UPDATE 
  restaurantLocations = removeItinerary(restaurantLocations, mapIndex);
  foodIconArray = removeIcon(foodIconArray, mapIndex);
}

function removeThingMarkers(mapIndex, $mapC) { //NEED TO UPDATE 
  thingToDoLocations = removeItinerary(thingToDoLocations, mapIndex);
  thingsIconArray = removeIcon(thingsIconArray, mapIndex);
}