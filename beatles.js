'use strict';
function theBeatlesPlay(musicians, instruments){
  var output = [];
  for(var i = 0; i < musicians.length; i++){
    output.push(musicians[i] + " plays " + instruments[i]);
  }
  return output; 
}

function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var output = [];
  var i = 0;
  
  while (i< facts.length){
    output.push(facts[i] + "!!!");
    i++;
  }
  return output;
}

function iLoveTheBeatles(num){
  var output = [];
  do{
    output.push("I love the Beatles!");
    num++;
  } while(num < 15);
  return output;
}