// function matchLocation (location, ItemLocation){
//   for (var i = 0; i < ItemLocation.length; i++) {
//    var truth = false;
//    for (var j = 0; j < ItemLocation[i].length; j++) {
       
//        if (ItemLocation[i][j] === location[j]) {
//            truth = true;
//        }
//        else {
//            truth = false;
//        }
//    }
//    if (truth === true) {
//        console.log(i);
//        return i;
//    }
//   }
// }

function removeArray(ItemArray, num){
  console.log("itemArray: ",ItemArray);
  console.log("num: ",num);
  console.log("itemArray[num]: ", ItemArray[num]);
  ItemArray.filter(function(el){
    return el!==ItemArray[num];
  });
}

function removeHotelMarker(location) {  //NEED TO UPDATE
  marker.setMap(null);
}

function removeFoodMarkers(mapIndex) { //NEED TO UPDATE 

  // var removeLocation = restaurantLocations.indexOf(location);
  restaurantLocations = removeArray(restaurantLocations, mapIndex);
  console.log(restaurantLocations);
  // return newArray;
}

// function removeThingMarkers(location) { //NEED TO UPDATE
//   // add new location to an array
//   thingToDoLocations.push(location);

//   thingToDoLocations.forEach(function (loc) {
//     drawLocation(loc, {
//       icon: '/images/star-3.png'
//     });
//   });
// }