function theBeatlesPlay(person,thing){
  var array = []
  for (var i = 0; i < person.length; i++){
    var x = person[i] + " plays " + thing[i];
    array.push(x);
  }
  return array
}

function johnLennonFacts(array){
  var newArray = []
  var i = 0
  while (i < array.length){
    newArray.push(array[i]+"!!!");
    i++;
  }
  return newArray
}

function iLoveTheBeatles(num){
  var newArray = []
  do {
    newArray.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return newArray;
}
