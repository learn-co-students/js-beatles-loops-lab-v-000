'use strict';

function theBeatlesPlay(musicians, instruments){
  var musiciansInstruments = new Array;
  for (var i = 0; i < musicians.length; i++){
    musiciansInstruments.push(musicians[i] + " plays " + instruments[i]);
  }
  return musiciansInstruments;
}

function iLoveTheBeatles(n){
  var stringArr = new Array;
  do {
    n++;
    stringArr.push("I love the Beatles!");
  } while (n < 15);
  return stringArr;
}

function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var excitedFacts = new Array;
  var i = 0;
  while (i < facts.length) {
    excitedFacts.push(facts[i] + "!!!");
    i++;
  }
  return excitedFacts;
}
