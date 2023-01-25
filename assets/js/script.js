// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var displayDate = $('#currentDay');
var timeBlock8 = $('#hour-8');
var timeBlock9 = $('#hour-9');
var timeBlock10 = $('#hour-10');
var timeBlock11 = $('#hour-11');
var timeBlock12 = $('#hour-12');
var timeBlock1 = $('#hour-1');
var timeBlock2 = $('#hour-2');
var timeBlock3 = $('#hour-3');
var timeBlock4 = $('#hour-4');
var timeBlock5 = $('#hour-5');
var currentDate = moment();
var currentHour = currentDate.format('H');



$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  
 function pastPresentFuture() {
    $('.time-block').each(function() {
    if ( $(this).attr('data-hour') < currentHour) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
        

        }else if (currentHour === $(this).attr('data-hour')){
            $(this).addClass('present');
            $(this).removeClass('future');
            $(this).removeClass('past');
            
        }else{
            $(this).addClass('future');
            $(this).removeClass('past');
            $(this).removeClass('present');

        };
 });
}

 function handleSave(){

 }

 function displaySave(){

 }

 function projectDate(){
    displayDate.text('It is ' + moment().format('dddd MMM D, YYYY h:mm:ss A'));
 }

 setInterval(projectDate, 100);
 setInterval(pastPresentFuture, 1000);
 console.log(currentHour);