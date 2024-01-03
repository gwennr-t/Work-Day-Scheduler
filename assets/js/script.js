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

// event listener for click events on the save button and save content to local storage
// $('.btn').on('click',function(){
//     var keyName = $this.
//     var keyValue = $this.
//     localStorage.setItem(keyName, keyValue);
// })
