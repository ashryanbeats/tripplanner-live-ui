$(".add").on('click', function(){
	var $addButton = $(this);
	var $category = $addButton.attr('id');
	var $place = $addButton.prev().find('option:selected').text();
	// console.log($("select option:selected").text());
	// console.log("addButton: ", $addButton);
	// console.log("category: ", $category);
	// console.log("place: ", $place);

	var $itineraryItem = '<div class="itinerary-item"><span class="title">' + $place + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>';
	var $listCategory = "#" + $category + "-list";
	//console.log($listCategory);

	// if (!$('#hotel-list').children()) {
	// 	$($listCategory).append($itineraryItem);	
	// }


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
	}
	else if ($listCategory === '#food-list' && $($listCategory).children().length < 3) {
		verifyDuplicate();
	}
	else if ($listCategory === '#things-list') {
		verifyDuplicate();	
	}





	// find the category in the list
	// append $itineraryItem
	


});
