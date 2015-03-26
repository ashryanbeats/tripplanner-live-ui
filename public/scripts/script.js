$(".add").on('click', function(){
	var $addButton = $(this);
	var $category = $addButton.attr('id');
	var $place = $addButton.prev().find('option:selected').text();
	// console.log($("select option:selected").text());
	console.log("addButton: ", $addButton);
	console.log("category: ", $category);
	console.log("place: ", $place);
});
