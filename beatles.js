'use strict';

function theBeatlesPlay(musicians, instruments){
  var beatlesInfo = [];
  for(var i = 0; i < musicians.length; i++){
    var info = musicians[i] + " plays " + instruments[i];
    beatlesInfo.push(info);
  }
  return beatlesInfo;
}



function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", 
               "He was never a vegetarian", 
               "He was a choir boy and boy scout", 
               "He hated the sound of his own voice"];

  var modFacts= []

  for (var i = 0; i < facts.length; i++){
    var fact = facts[i] + "!!!"
    facts[i] = fact
  }
  return facts
  }

function iLoveTheBeatles(num){
  var love = []
  do {
    love.push("I love the Beatles!")
    num ++;
  } while (num < 15);
  return love;
}