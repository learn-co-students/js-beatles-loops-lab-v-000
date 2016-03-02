'use strict';

function theBeatlesPlay(musicians, instruments){
  var together = [];
  for (var i = 0; i < musicians.length; i++){
    var sentence = musicians[i] + " plays " + instruments[i];
    together.push(sentence);
  }
return together;
}

function johnLennonFacts (){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var awesomeFacts = [];
  var i = 0;

  while (i < facts.length){
    awesomeFacts.push(facts[i] + "!!!");
    i++;
  }
  return awesomeFacts;
}

function iLoveTheBeatles (number){
  var array = []; 

  do {
    var phrase = "I love the Beatles!";
    array.push(phrase);
    number ++;

  } while (number < 15);
  return array;
} 