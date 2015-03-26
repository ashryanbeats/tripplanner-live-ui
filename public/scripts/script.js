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
	console.log($listCategory);


	// find the category in the list
	// append $itineraryItem
	$($listCategory).append($itineraryItem);


});
