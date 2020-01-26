$(document).ready(function() {

  // var
  var toDoList = [];

  // array with things to do
  toDoList = ['Buy tickets for the cinema', 'Buy some milk', 'Bake a cake', 'Go for a walk', 'Have a nice rest', 'Wake up at 07:00', 'Read a book'];
  console.log(toDoList);

  // add array
  

  // check
  $('.check').click(function() {
    check($(this));
  });

  // cross
  $('.cross').click(function() {
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
