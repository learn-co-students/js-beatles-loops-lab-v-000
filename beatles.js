'use strict';

function theBeatlesPlay(musicians, instruments) {
  var band = [];
  for (var i = 0; i < musicians.length; i++) {
    band.push(musicians[i] + " plays " + instruments[i]);
  };
  return band
}

function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var array = [];
  var i = 0;
  while (i < facts.length) {
    array.push(facts[i] + "!!!");
    i++
  };
  return array
}

function iLoveTheBeatles(number){
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15)
  return array
}