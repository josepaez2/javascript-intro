// memo = 0
// function counter() {
// return memo+=1
//   }


// var count = counter()


// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())


// var count = counter()

// function hola(){
//   return console.log("Hola soy yo")
// }


// var alo = function (){
//   return console.log("Hola soy yo")
// }
// alo()

// var alo = function hola(){
//   return console.log("Hola soy yo")
// }



function counter() {
  return function (){
    return memo+=1
    }
}
console.log(counter())

console.log ("hola")