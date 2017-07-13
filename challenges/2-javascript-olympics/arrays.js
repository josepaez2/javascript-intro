var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Lemon";     
// adds a new element (Lemon) to fruits

function promediame (arr){
  var sum = 0
  var counter = 0
  arr.forEach (function(element){
    sum += element;
    counter += 1;
  })
  if (sum === 0 && counter === 0){
    return 0
  } else {
    return sum/counter;
  }
}