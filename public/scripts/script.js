var mapGenerator = function(mapLocation){ //converts place string coordinates into array of numbers
	var $mapCoord = mapLocation.split(',');
	var $mapCoord0 = Number($mapCoord[0]);
	var $mapCoord1 = Number($mapCoord[1]);
	var $mapC = [];
	$mapC.push($mapCoord0);
	$mapC.push($mapCoord1);
	return $mapC;
}


$(".add").on('click', function(){
	var $addButton = $(this);
	var $category = $addButton.attr('id');
	var $place = $addButton.prev().find('option:selected').text();
	var $mapLocation = $addButton.prev().find('option:selected').attr('value');
	var $mapC = mapGenerator($mapLocation);
	
	var $itineraryItem = '<div class="itinerary-item"><span class="title">' + $place + '</span><button value="' +$mapC+'" class="btn btn-xs btn-danger remove btn-circle">x</button></div>';
	var $listCategory = "#" + $category + "-list";

	function verifyDuplicate() { //confirms if already added place
		var match = false;

		$($listCategory).children().each(function() { 
			var span = $(this).find('span').text();

			if ($place === span) {
				match = true;
			}
		});

		if (match === false) {
			$($listCategory).append($itineraryItem);	
		}
	}

	if ($listCategory === '#hotel-list' && $($listCategory).children().length === 0) {
		$($listCategory).append($itineraryItem);
		updateHotelMarker($mapC);	//adds hotel location - only one per day & no duplicates
	}
	else if ($listCategory === '#food-list' && $($listCategory).children().length < 3) {
		verifyDuplicate();
		updateFoodMarkers($mapC); //adds restaurants - only 3 per day & no duplicates
	}
	else if ($listCategory === '#things-list') {
		verifyDuplicate();	
		updateThingMarkers($mapC); //adds things to do - no duplicates
	}	
});


$(".list-group").delegate('.remove', 'click', function(){
	var $place = $(this).attr('value');
	var $mapC = mapGenerator($place);

	$(this).parent().remove(); //removes button & itinerary item

});