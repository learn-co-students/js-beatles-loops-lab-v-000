'use strict';


function theBeatlesPlay(musicians, instruments){

var together = []

for (var i = 0; i < musicians.length; i++){
var sentence = (musicians[i] + " plays " + instruments[i]);
  together.push(sentence)
}
return together;
}


function johnLennonFacts(){

  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  facts.forEach(function(fact, index){

    facts[index] += "!!!";
  });
  return facts;
}

function iLoveTheBeatles(num){

  var sentence = [];
  var i= 0;
  do {
    sentence.push("I love the Beatles!");
    i++;
  } while (i <= num && num < 15);
  return sentence;
}
