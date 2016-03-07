'use strict';

function theBeatlesPlay (musicians, instruments) {
  var array = []
  for (var i = 0; i < 4; i++){
    array.push(musicians[i] + " plays " + instruments[i])
  };
  return array
}

function johnLennonFacts () {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var output = []
  var i = 0
  while (i < 4){
    output.push(facts[i] + "!!!");
    i++;
  };
  return output;
}

function iLoveTheBeatles (number) {
  var output = []
  do {
    output.push("I love the Beatles!")
    number ++;
  } while (number < 15);
  return output;
}