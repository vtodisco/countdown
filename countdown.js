console.log(config);
var endtime = config.endtime;
var id = "clockdiv";
var daysBox = document.getElementById("days");
var hoursBox = document.getElementById("hours");
var minutesBox = document.getElementById("minutes");
var secondsBox = document.getElementById("seconds");

function getTimeRemaining(){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(){
  console.log("VMT DEBUG: inside initializeClock function");
  var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
    days.innerHTML = ('0' + t.days).slice(-2);
    hours.innerHTML = ('0' + t.hours).slice(-2);
    minutes.innerHTML = ('0' + t.minutes).slice(-2);
    seconds.innerHTML = ('0' + t.seconds).slice(-2);
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1000);
}

function updateClock(){
  var clock = document.getElementById(id);
  var t = getTimeRemaining();
  days.innerHTML = ('0' + t.days).slice(-2);
  hours.innerHTML = ('0' + t.hours).slice(-2);
  minutes.innerHTML = ('0' + t.minutes).slice(-2);
  seconds.innerHTML = ('0' + t.seconds).slice(-2);
  if(t.total<=0){
    clearInterval(timeinterval);
  }
}

//updateClock(); // run function once at first to avoid delay

var timeinterval = setInterval(updateClock,1000);
