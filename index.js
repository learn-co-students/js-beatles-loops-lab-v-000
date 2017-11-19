function theBeatlesPlay(musicians,instruments){
  var newArray = [];
  musicians.forEach(function(musician , index){
    newArray.push(`${musician} plays ${instruments[index+0]}`);
  })
  return newArray
}

function johnLennonFacts(array) {
  var johnLennon = [];
  var i = 0;
  while (i < array.length) {
    johnLennon.push(array[i] + "!!!");
    i++;
  }
  return johnLennon;
}

function iLoveTheBeatles(numbers) {
  var array= [];
  do { array.push("I love the Beatles!");
      numbers++;
  } while (numbers < 15);
  return array;
}