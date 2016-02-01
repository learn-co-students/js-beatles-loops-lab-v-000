'use strict';

function theBeatlesPlay(musicianArray, instrumentArray) {
  var outcome = [];
  for (var i = 0; i < musicianArray.length ;i++){
    var memberInstrument = musicianArray[i] + " plays " + instrumentArray[i];
    outcome.push(memberInstrument);
  }
  return outcome;
}

function johnLennonFacts( ) {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var moreFacts = [];
  var i = 0;
  while (i < facts.length) {
    moreFacts.push(facts[i] + "!!!");
    i++;
  }
  return moreFacts;

}

function iLoveTheBeatles(num){
  var stream = [];
  do {
    stream.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return stream;
}