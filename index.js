const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians,instruments){
  var newArray = []
  for(var i = 0; i < musicians.length; i++){
    newArray.push(musicians[i] + " plays " + instruments[i])
  }
  return newArray
}

function johnLennonFacts(factsArray){
  var i = 0;
  var newArray = []
  while(i < factsArray.length){
    newArray.push(factsArray[i] + "!!!")
    i++;
  }
  return newArray
}

function iLoveTheBeatles(numberParameter){
  var newArray = []
  do{
    newArray.push("I love the Beatles!")
    numberParameter++
  }while(numberParameter < 15)

  return newArray
}
