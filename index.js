// function theBeatlesPlay(musicians, instruments) {
//   var array = [];
//   for(var i = 0; i < musicians.length; i++) {
//     array.push(`${musicians[i]} plays ${instruments[i]}`);
//   }
//   return array;
// }
//
// function johnLennonFacts(array) {
//   var i = 0;
//   while (i < array.length) {
//     array[i] = array[i] + "!!!";
//     i++;
//   }
//   return array;
// }
//
// function iLoveTheBeatles(number) {
//   var array = [];
//   do {
//     array.push('I love the Beatles!');
//     number ++;
//   } while (number < 15);
//   return array;
// }

function theBeatlesPlay(musicians,instruments) {
  var x = []
  for (var i = 0; i < musicians.length; i++) {
    x.push(musicians[i] + ' plays ' + instruments[i])
  }
  return x;
}

function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] += '!!!';
    i++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  var arr = [];
  var i = 0;
  do {
    arr.push('I love the Beatles!');
    i++;
  } while (i <= number && number < 15);
  return arr;
}
