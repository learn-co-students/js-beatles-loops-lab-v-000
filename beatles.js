'use strict';
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var smush = [];
  for (var i = 0; i < musicians.length; i++){
    var whoDidWhat = musicians[i] + " plays " + instruments[i];
    smush.push(whoDidWhat);
  }
return smush;
}


function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var i = 0;
  var beatleFacts = [];
  while (i < facts.length){
    beatleFacts.push(facts[i] + "!!!");
    i++;
  }
  return beatleFacts;
}

function iLoveTheBeatles(count){
  var omgBeatles = []
  do {
    omgBeatles.push("I love the Beatles!")
    count++;
  } while (count <15);
  return omgBeatles;
}
