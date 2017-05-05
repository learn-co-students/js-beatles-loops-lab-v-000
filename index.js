function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (let i = 0; i < 4; i++)
  if (i === 0) {
    array.push ( musicians[0] +  " plays "  + instruments [0] );
  }
    else if ( i === 1) {
    array.push ( musicians [1] +  " plays "  + instruments [1]);
    }
      else if ( i === 2 ) {
      array.push ( musicians [2] +  " plays "  + instruments [2]);
      }
        else {
          array.push (musicians [3] +  " plays "  + instruments [3]);
        }
 return array
}

function johnLennonFacts (facts){
var newFacts = [];
var i = 0
  while (i < facts.length) {
    newFacts.push( facts [i] + "!!!");
    i++;
  }
  return newFacts
}

function iLoveTheBeatles (n) {
var array = [];
do {
  array. push ("I love the Beatles!");
  n ++
} while (n < 15 );
return array 
}
