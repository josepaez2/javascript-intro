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


var oscar = {name: "Jose", age: 50, sport: "futbol"}
var jose = {name: "Oscar",age: 80,sport: "tennis"}


var pepito = {
  name: 'pepito',
  age: 34,
  height: 423
}

var ozu = {
  name: 'ozu',
  age: 324,
  height: 432
}


// 1. Añadir propiedades a objetos
// Function Declaration


// Crea una función que reciba un array de atletas
//  y que añada la propiedad `win` a cada atleta 
//  dentro del arreglo.  `win` debe ser una función
//  que imprima en la consola "{name} won the {event}",
//  `event` es un argumento que recibe esta función.

function addWinToAthlete (athletes, event) {
  athletes.forEach(function(athlete){
    athlete.win = function() {
      console.log(`${athlete.name} won the ${event}`)
    }
  })
}


var jose = {name: "Jose", age: 50, sport: "futbol"}
var oscar = {name: "Oscar",age: 80,sport: "tennis"}
var athletes = []
athletes[0] = jose
athletes[1] = oscar



for (var i = 0; i < athletes.length; i++) {
	athletes[i].win = console.log(`${athletes[i].name} won the ${athletes[i].sport}`)
	athletes[i].win

function reverseString(string) {
  var result
  return result

}

console.log(" ".length)

// 2. Voltea un String




// 3. Remueve numeros impares

var arr = [1,2,3,4,5]

function removeOdds(arr) {
  return arr.filter(function(element){
    return element % 2 === 0
  })
}

// 4. Funcion constructora



function Athlete(name, age, sport) {
  this.name = name
  this.age = age
  this.sport = sport
}


// 5. Reflexion


/////// Pruebas //////////
var michaelPhelps = new Athlete("Michael Phelps", 29, "swimming")

console.log(michaelPhelps.constructor === Athlete)
console.log((michaelPhelps.name + " " + michaelPhelps.sport + " " + michaelPhelps.age) === 'Michael Phelps swimming 29')
