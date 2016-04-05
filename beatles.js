'use strict';

function theBeatlesPlay(musicians, instruments){
  var beatles = [];
  for(var i = 0; i < musicians.length; i++){
    beatles.push(musicians[i] + ' plays ' + instruments[i]);
  } 
  return beatles;
}

function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", 
               "He was never a vegetarian", 
               "He was a choir boy and boy scout", 
               "He hated the sound of his own voice"];
  var excitedFacts = [];
  for(var i = 0; i < facts.length; i++){
    excitedFacts.push(facts[i] + '!!!');
  }
  return excitedFacts;
}

function iLoveTheBeatles(number){
  var iLoveTheBeatles = [];
  do{
    iLoveTheBeatles.push('I love the Beatles!');
    number++
  } while(number < 15)
  return iLoveTheBeatles;
}