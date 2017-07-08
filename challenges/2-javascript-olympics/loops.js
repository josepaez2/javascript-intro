// JAVASCRIPT LOOPS

// FOR

Ejemplo 1 
array = []
for (let i = 0; i <= 4; ++i) {
	array.push(i)
}
console.log(array)

>>> array = [0, 1, 2, 3, 4]

Ejemplo 2

var jose = {name: "Jose", age: 50, sport: "futbol"}
var oscar = {name: "Oscar",age: 80,sport: "tennis"}
var athletes = []
athletes[0] = jose
athletes[1] = oscar


for (var i = 0; i < athletes.length; i++) {
	athletes[i].win = console.log(`${athletes[i].name} won the ${athletes[i].sport}`)
	athletes[i].win
}

>>>Jose won the tennis
>>>Oscar won the futbol

// WHILE


//MAP

// MAL
// function winner(array) {
// var newArr = array.map(function(element){
// 	return console.log(element)
// })
// console.log(newArr)
// }





