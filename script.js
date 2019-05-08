var countDownDate = new Date("Jan 1, 2020 00:00:01").getTime();
                        // Change Above To Set The Date.


var x = setInterval(function() {
  var now = new Date().getTime();
  
  var distance = countDownDate - now;
  var until = ("It's ");
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var Christmas2 = (" Until Your Countdown Finishes.")
    
  document.getElementById("demo").innerHTML = until + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s " + Christmas2;
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Your countdown has ended.";
  }
}, 1000);