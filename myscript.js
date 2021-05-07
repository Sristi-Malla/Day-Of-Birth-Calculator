var userMonth = document.getElementById("user-month");
var userDay = document.getElementById("user-day");
var userYear = document.getElementById("user-year");

var submitButton = document.getElementById("submit-date");

submitButton.addEventListener("click",function(evt) {
  var message=document.getElementById('message');
  var parsedMonth=(parseInt(userMonth.value)-1); //will convert string to integer
  var parsedDay=parseInt(userDay.value);
  var parsedYear=parseInt(userYear.value);
  var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  var weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var dateIs = new Date(parsedYear, parsedMonth, parsedDay);
  var weekdayIs=weekday[dateIs.getDay()]; //getDay is used to return the name of weekday : 0-sunday and so on
  var monthIs=months[parsedMonth];

  if(weekdayIs === undefined || monthIs === undefined) {
    message.innerText = "";
    setTimeout(function() {
      message.innerText = "Please enter a valid date";}, 500) //displays every 500ms
    }
    else{
      message.innerText = weekdayIs +", " + monthIs + " " + parsedDay +", " + parsedYear;
    }
  })

