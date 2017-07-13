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

setTimeout(function(){ $('#time').html("2") }, 1000);
setTimeout(function(){ $('#time').html("1") }, 2000);
setTimeout(function(){ $('#time').html("CORRAN MUCHACHOS!!") }, 3000);









    

