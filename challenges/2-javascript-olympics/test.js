function adjustText(string, number) {
  if (string.length >= number){
    console.log( string.substring(0, number))
  }   else {
    console.log(string + ("c".repeat(number - string.length)))
  } 
}

adjustText("Pedro", 4)
adjustText("Pedro", 10)
adjustText("a", 6)

function adjustText(str, length) {
  if (str.length > length) {
     str = str.substring(0, length);
  } else {
    while (str.length < length) {
      str += " ";
    }
  }

  return str;
}
  
adjustText("Pedro", 4)
adjustText("Pedro", 10)
adjustText("a", 6)
