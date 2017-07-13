// $(document).ready(function() {  // Codigo Procedural Procedimental --> OOP
//   // Event Listener
//   $('#roller button.add').on('click', function() { // Controlador
//     $('.dice').append('<div class="die">0</div>'); // Vista
//   });

//   // Event listener
//   $('#roller button.roll').on('click', function() { // Controlador
//     $('.die').each(function(index, dieHtml) { // Controlador
//       var value = Math.floor((Math.random()*6)+1); // Model
//       $(dieHtml).text(value); // Vista
//     });
//   });

// });

// $(document).ready(function() {  

  function Die(sides){
    // atributos van adentro
    this.sides = sides
    this.value = 0
  }
    // COMPORTAMIENTOS DEL DIE
    //  comportamientos van afuera si van por prototype

    // roll the die
    // genera valores aleatorios
    Die.prototype.roll = function(){
      this.value = Math.floor((Math.random()*this.sides)+1)
    }

  function View(){
    // atributos van adentro
  }
    // COMPORTAMIENTOS DEL VIEW 
    //  comportamientos van afuera si van por prototype

    // paint_a_die
    View.prototype.paint_a_die = function(event){
      $('.dice').append('<div class="die">0</div>')
    }
    // change text of die
    View.prototype.change_die_value = function(dieHtml,value){
      $(dieHtml).text(value)
    }


  function Controller(model, view){
    // atributos van adentro
    this.view = view
    this.model = model
  }
    // COMPORTAMIENTOS DEL CONTROLLER
    //  comportamientos van afuera si van por prototype

    // listen_to_die_add
    Controller.prototype.listen_to_add_die = function(){
      $('#roller button.add').on('click', this.view.paint_a_die)
    }
    // listen_to_die_roll
    Controller.prototype.listen_to_die_roll = function(){
      var controller = this
      $('#roller button.roll').on('click', function(event) {
        $('.die').each(function(index, dieHtml){
          controller.model.roll()
          var newDieValue = controller.model.value
          controller.view.change_die_value(this, newDieValue)
        })
      })
    }



  // new controller que invoque a todos los news 
  var controller = new Controller (new Die(6),new View())
  // detonar los listeners
  controller.listen_to_add_die()
  controller.listen_to_die_roll()
// });


