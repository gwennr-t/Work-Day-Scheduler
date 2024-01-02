// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// display the current date and time
var currentDay = $('#currentDay');

function displayTime() {
    var rightNow = dayjs().format('MMMM DD, YYYY');
    currentDay.text(rightNow);
}

displayTime();

// function that adjusts colors based on past, present, future
function addClass() {
    var hourBlock = $('.hour');
    var descriptionBlock = $('.description')
    var currentHour = dayjs().hour;

    if (hourBlock < currentHour) {
        $(descriptionBlock).addClass('past');
    }else if(hourBlock == currentHour){
        $(descriptionBlock).addClass('present');
    }else if(hourBlock > currentHour){
        $(descriptionBlock).addClass('future');
    }
};

addClass();

// save content to local storage when clicking save and display
$('.btn').on('click', function() {
    localStorage.setItem(".description");
});

// $(function(){

// });

$(function () {

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
  }); 
 
 