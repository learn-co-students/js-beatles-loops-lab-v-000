
'use strict';

function theBeatlesPlay(artists, instruments) {


  var strings = [];

  for (var i = 0; i < artists.length; i++) {
    strings.push(artists[i] + " plays " + instruments[i]);
   
  };
  return strings;

}


function johnLennonFacts(array) {
  var counter = array.length;
  while (counter > 0) {
    array[counter - 1] += "!!!";
    counter -= 1;
  }
  return array;
}


function iLoveTheBeatles(number) {
  var array = []
  var counter = number 
  do {
    array.push("I love the Beatles!");
    counter -= 1;
    
  }
    while (counter >= 0 && counter < 15);
    return array;
}