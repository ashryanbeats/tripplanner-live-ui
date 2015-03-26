$(".add").on('click', function(){
	var $addButton = $(this);
	var $category = $addButton.attr('id');
	var $place = $addButton.prev().find('option:selected').text();
	var $mapLocation = $addButton.prev().find('option:selected').attr('value');
	var $mapCoord = $mapLocation.split(',');
	var $mapCoord0 = Number($mapCoord[0]);
	var $mapCoord1 = Number($mapCoord[1]);
	var $mapC = [];
	$mapC.push($mapCoord0);
	$mapC.push($mapCoord1);

	var $itineraryItem = '<div class="itinerary-item"><span class="title">' + $place + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>';
	var $listCategory = "#" + $category + "-list";

	function verifyDuplicate() {
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
		updateHotelMarker($mapC);	
	}
	else if ($listCategory === '#food-list' && $($listCategory).children().length < 3) {
		verifyDuplicate();
		updateFoodMarkers($mapC);
	}
	else if ($listCategory === '#things-list') {
		verifyDuplicate();	
		updateThingMarkers($mapC);
	}	
});
