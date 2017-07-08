function isAlive(playerName, points) {
  if (playerName === "ikk" && points > 30){
    return true
  }   else if (playerName === "gut" && points > 10){
    return true
  } else{
      return false
  }
}

function isAlive(playerName, points) {
  return (playerName === "ikk" && points > 30) || (playerName === "gut" && points > 10)
}