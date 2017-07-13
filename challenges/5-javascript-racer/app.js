function Model(){

}

function View(){
  
}
  // move_player
  View.prototype.move_player = function(player){
    if ($('#player1_strip td').last().hasClass("active")) {
      alert("Ganaste player 1")
    }
    if ($('#player2_strip td').last().hasClass("active")) {
      alert("Ganaste player 2")
    }
    if (player === "q") {
      $('#player1_strip .active').next().addClass("active")
      $('#player1_strip .active').first().removeClass("active")
    }
    if (player === "p") {
      $('#player2_strip .active').next().addClass("active")
      $('#player2_strip .active').first().removeClass("active")
    }
  }

function Controller(model, view){
  this.model =model
  this.view = view
}
  // listen_to_key_stroke
  Controller.prototype.listen_to_key_stroke = function(){
    var controller  = this
    $(document).on('keyup', function(event){
      // console.log(event.keyCode)
      if(event.keyCode === 81){
        controller.view.move_player("q")
      }
      if(event.keyCode === 80){
        controller.view.move_player("p")
      }
    })
  }

  // listen_to_key_stroke
  Controller.prototype.button_listener = function(){
    var controller  = this
    $(document).on('click', function(event){
      location.reload()
    })
  }

  var controller = new Controller (new Model(),new View())
    setTimeout(function(){ controller.listen_to_key_stroke() }, 3000);

    controller.button_listener()



// // Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get todays date and time
//   var now = new Date().getTime();

//   // Find the distance between now an the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = seconds + "s ";

//   // If the count down is finished, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);


var timeleft = 3;
var downloadTimer = setInterval(function(){
  document.getElementById("progressBar").value = 10 - --timeleft;
  if(timeleft <= 0)
    clearInterval(downloadTimer);
},1000);

// setTimeout(function(){ $('#time2').html("2") }, 1000);
// setTimeout(function(){ $('#time2').html("1") }, 2000);
// setTimeout(function(){ $('#time2').html("A CORRER!!") }, 3000);
// setTimeout(function(){ $('#time').html("") }, 4000);
// setTimeout(function(){ $('#time').html(">>") }, 5000);
// setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 5150);
// setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 5200);
// setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 5250);
// setTimeout(function(){ $('#time').html("") }, 5700);
// setTimeout(function(){ $('#time').html(">>") }, 5800);
// setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 5950);
// setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 6000);
// setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 6050);
// setTimeout(function(){ $('#time').html("") }, 6100);
// setTimeout(function(){ $('#time').html(">>") }, 6200);
// setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 6230);
// setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 6260);
// setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 6290);
// setTimeout(function(){ $('#time').html("") }, 6320);
// setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 6321);
// setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 6322);
// setTimeout(function(){ $('#time').html("") }, 6380);

setTimeout(function(){ $('#time2').html("2") }, 1000);
setTimeout(function(){ $('#time2').html("1") }, 2000);
setTimeout(function(){ $('#time2').html("A CORRER!!") }, 3000);
setTimeout(function(){ $('#time').html("") }, 4000);
setTimeout(function(){ $('#time').html(">>") }, 1000);
setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 1150);
setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 1200);
setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 1250);
setTimeout(function(){ $('#time').html("") }, 1700);
setTimeout(function(){ $('#time').html(">>") }, 1800);
setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 1950);
setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 2000);
setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 2050);
setTimeout(function(){ $('#time').html("") }, 2100);
setTimeout(function(){ $('#time').html(">>") }, 2200);
setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 2230);
setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 2260);
setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 2290);
setTimeout(function(){ $('#time').html("") }, 2320);
// setTimeout(function(){ $('#time').html(">>") }, 0000);
setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 2321);
setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 2322);
// setTimeout(function(){ $('#time').html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp>>") }, 0000);
setTimeout(function(){ $('#time').html("") }, 2380);








    

