 // U3.W7: JavaScript Olympics

// Crea una función que reciba un array de atletas
// y que añada la propiedad `win` a cada atleta dentro
//  del arreglo.  `win` debe ser una función que imprima
//   en la consola "{name} won the {event}",  `event` es
//    un argumento que recibe esta función.

// Hace mas sentido crear `win` como una expression o una 
// declaración?

// Integrantes parejas: nombre1, nombre2


// 0. Objetos

function Athlete(name, height, sport) {
    this.name = name;
    this.height = height;
    this.sport = sport;
}
var oscar = new Athlete("Jose", 50, "futbol");
var jose = new Athlete("Oscar", 80, "tennis");


// 1. Añadir propiedades a objetos

a1 = {
  name: 'fasd',
  age: 12
}

a2 = {
  name: 'afsdf',
  age: 324
}


var name = 'juan'

// Function Declaration
function name() {

}

// Function Expresssion
var name = function() {
  console.o
}




function addWinToAthletes(athletes, event) {
  athletes.forEach(function(athlete){
    athlete.win = function() {
      console.log(`${this.name} won the ${event}`)
    }
  })
}


addWinToAthletes([a1,a2], 'Tennis')



// 2. Voltea un String




// 3. Remueve numeros impares




// 4. Funcion constructora




// 5. Reflexion


/////// Pruebas //////////
var michaelPhelps = new Athlete("Michael Phelps", 29, "swimming")
console.log(michaelPhelps.constructor === Athlete)
console.log((michaelPhelps.name + " " + michaelPhelps.sport + " " + michaelPhelps.age) === 'Michael Phelps swimming 29')
