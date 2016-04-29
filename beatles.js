'use strict';

function theBeatlesPlay(musicians,instruments){
  var new_array =[];
  for(var i = 0; i < musicians.length; i++){
    new_array.push(musicians[i] + " plays " + instruments[i]);
  }
  return new_array;
}

function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var new_array =[];
  var i = 0;
  while (i < facts.length){
    new_array.push(facts[i] + "!!!");
    i++;
  }
  return new_array;
}

function iLoveTheBeatles(num){
  var new_array = [];
  do{
    new_array.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return new_array;
}
