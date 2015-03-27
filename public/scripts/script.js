var mapGenerator = function(mapLocation){ //converts place string coordinates into array of numbers
	var $mapCoord = mapLocation.split(',');
	var $mapCoord0 = Number($mapCoord[0]);
	var $mapCoord1 = Number($mapCoord[1]);
	var $mapC = [];
	$mapC.push($mapCoord0);
	$mapC.push($mapCoord1);
	return $mapC;
};

var foodCounter = -1;
var thingCounter = -1;



$(".add").on('click', function(){
	var $addButton = $(this);
	var $category = $addButton.attr('id');
	var $place = $addButton.prev().find('option:selected').text();
	var $mapLocation = $addButton.prev().find('option:selected').attr('value');
	var $mapC = mapGenerator($mapLocation);
	
	var $itineraryItem = '<div class="itinerary-item"><span class="title">' + $place + '</span><button value="' +$mapC+'" class="btn btn-xs btn-danger remove btn-circle">x</button></div>';
	var $listCategory = "#" + $category + "-list";

	function verifyDuplicate(counter) { //confirms if already added place
		var match = false;


		$($listCategory).children().each(function() { 
			var span = $(this).find('span').text();

			if ($place === span) {
				match = true;
			}
		});

		if (match === false) {
			
			$($listCategory).append($itineraryItem);
			// var $divIndex = $('.itinerary-item').last();
			// $($divIndex).attr({arrayIndex: '' + counter + ''});
		}
	}

	if ($listCategory === '#hotel-list' && $($listCategory).children().length === 0) {
		$($listCategory).append($itineraryItem);
		updateHotelMarker($mapC);	//adds hotel location - only one per day & no duplicates
	}
	else if ($listCategory === '#food-list' && $($listCategory).children().length < 3) {
		foodCounter ++;
		verifyDuplicate(foodCounter);
		updateFoodMarkers($mapC); //adds restaurants - only 3 per day & no duplicates
	}
	else if ($listCategory === '#things-list') {
		thingCounter ++;
		verifyDuplicate(thingCounter);	
		updateThingMarkers($mapC); //adds things to do - no duplicates
	}	
});


$(".list-group").delegate('.remove', 'click', function(){
	var $place = $(this).attr('value'); //coordinates

	var $mapC = mapGenerator($place);
	if($(this).parent().parent().attr('id')==='hotel-list'){
		$(this).parent().remove();
		// removeHotelMarker($mapC);

	}
	else if($(this).parent().parent().attr('id')==='food-list'){
		var mapIndex = ($(this).parent().index());//index num
		$(this).parent().remove();	
		removeFoodMarkers(mapIndex, $mapC);

	}
	else if($(this).parent().parent().attr('id')==='things-list'){
		var thingIndex = ($(this).parent().index());
		$(this).parent().remove();	
		removeThingMarkers(thingIndex, $mapC);

	}
	// $(this).parent().remove(); //removes button & itinerary item

});