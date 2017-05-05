function theBeatlesPlay(musicians, instruments){
  var band = []

    for (let i = 0; i <=3; i++){
      band.push(`${musicians[i]} plays ${instruments[i]}`)

    }

  return band
}

function johnLennonFacts(facts){

   let fact = facts.map(function(string){
     return string + "!!!"
   })
   return fact
}


function iLoveTheBeatles(number){
  var fandom = []

  do {
    fandom.push("I love the Beatles!")
    number++
  } while (number < 15)

  return fandom
}
