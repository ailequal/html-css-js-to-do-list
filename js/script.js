$(document).ready(function () {

	// var
	var i = 0;
	var toDoList = [];
	var listItem = '';

	// start with an empty input box
	$('#item').val('');

	// array with things to do
	toDoList = ['Buy tickets for the cinema', 'Buy some milk', 'Bake a cake', 'Go for a walk', 'Have a nice rest', 'Wake up at 07:00', 'Read a book'];

	// add array at to-do-list
	for (i = 0; i < toDoList.length; i++) {
		listItem = $('.template li').clone();
		listItem.append(toDoList[i]);
		$('.to-do-list').append(listItem);
	}

	// add
	$(document).on('keydown', '#item', function () {
		if (event.which === 13) {
			add($('#item').val());
		}
	});

	// check
	$(document).on('click', '.check', function () {
		check($(this));
	});

	// cross
	$(document).on('click', '.cross', function () {
		cross($(this));
	});

});


// function
// generate random numbers between min and max
function getRandomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// add an item
function add(select) {
	var item = $('#item');
	var listItem = $('.template li').clone();
	if (item.val().length !== 0) {
		listItem.append(select);
		$('.to-do-list').append(listItem);
		item.val('');
	}
}

// check an item
function check(select) {
	var listItem = select.closest('li');
	listItem.toggleClass('line-through');
}

// cross (remove) an item
function cross(select) {
	var listItem = select.closest('li');
	listItem.remove();
}
