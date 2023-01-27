// using Jquery to travers the DOM
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
var currentHour = currentDate.format('HH');

//   this function adds and removes classes to the timeblocks to indicate whether the hour has passed or is yet to come
 function pastPresentFuture() {
    // this if statement compates the data-hour attribute value to the current times hour
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
// this function takes the info from the specific save buttons associated div and stores information in local storage
 function handleSave(event){
    var timeBlockText = $(this).siblings('textarea').val();
    var timeBlockKey = $(this).parent().attr('id');
    localStorage.setItem(timeBlockKey, timeBlockText);
 }
//this function runs through a list of all timeblocks and displays the text that was saved in its associated local storage target
 function displaySave(){
    var arr = ['hour-8', 'hour-9', 'hour-10', 'hour-11', 'hour-12', 'hour-1', 'hour-2', 'hour-3', 'hour-4', 'hour-5'];
    for(var i = 0; i < arr.length; i++){;
        // since the timeblock appear in order in the DOM I can travers down the parent container #overallContainer and target each timeblock to fill with the associated keyitem in local storage
    $('#overallContainer').children().eq(i).children('textarea').text(localStorage.getItem(arr[i]));}
 }

 //this function displays the time at the top of the page
 function projectDate(){
    displayDate.text('It is ' + moment().format('dddd MMM D, YYYY h:mm:ss A'));
 }

 setInterval(projectDate, 100);
 setInterval(pastPresentFuture, 100);
 displaySave();

 timeBlock8.children('button').on('click', handleSave);
 timeBlock9.children('button').on('click', handleSave);
 timeBlock10.children('button').on('click', handleSave);
 timeBlock11.children('button').on('click', handleSave);
 timeBlock12.children('button').on('click', handleSave);
 timeBlock1.children('button').on('click', handleSave);
 timeBlock2.children('button').on('click', handleSave);
 timeBlock3.children('button').on('click', handleSave);
 timeBlock4.children('button').on('click', handleSave);
 timeBlock5.children('button').on('click', handleSave);

 console.log(currentHour);