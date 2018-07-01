// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(grid) {
// Your code goes here!
	var canvas = $('#pixelCanvas');
	var row = $('#inputHeight').val();
	var col = $('#inputWeight').val();

	canvas.children().remove();

	for (var i = 1; i <= row; i++) {
		canvas.append('<tr></tr>');
	};

	rows = $('tr');

	for (var j = 1; j <= col; j++) {
		rows.append('<td></td>');
	};

	cell = canvas.find('td');

	cell.click(function(){
		var paint = $('#colorPicker').val();
		$(this).attr('bgcolor', paint);
	});
};

$('input[type="submit"]').click(function(event){
	event.preventDefault();
	makeGrid();
});