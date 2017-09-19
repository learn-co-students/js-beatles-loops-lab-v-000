function theBeatlesPlay(musicians, instruments) {
  var array = new Array();
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array) {
  var newArray = new Array();
  var i = 0;
  while (i < array.length) {
    newArray.push(`${array[i]}` + '!!!')
    i++
  }
  return newArray
}

function iLoveTheBeatles(n) {
  var array = new Array();
  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15);
  return array
}
