function theBeatlesPlay(musicians, instruments) {
  var musicians_instruments = new Array
  for (var i = 0; i < musicians.length; i++) {
    musicians_instruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musicians_instruments
}

function johnLennonFacts(array) {
  var i = 0
  while ( i < array.length ) {
    array[i] +=  "!!!"
    i++
  }
  return array
}

function iLoveTheBeatles(number) {
  var new_array = new Array
  do {
    new_array.push("I love the Beatles!")
    number += 1
  } while (number < 15);
  return new_array
}
