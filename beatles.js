'use strict';

function theBeatlesPlay(mus, intr){
  var sentences = [];
    for(var i = 0; i<mus.length; i++){
      sentences.push(mus[i]  + " plays " + intr[i]);
    }
    return sentences;
}

function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var blah = [];
  var i=0;
  while(i<facts.length){
    blah.push(facts[i] + "!!!");
    i++;
  }
  return blah;
}

function iLoveTheBeatles(num){
  var arr = [];
  
  do{
    
    arr.push("I love the Beatles!");
    num++;
  } while(num<15);

  return arr;

}