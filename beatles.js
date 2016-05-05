'use strict';

function theBeatlesPlay() {
  return [ 'John Lennon plays Guitar', 'Paul McCartney plays Bass Guitar', 'George Harrison plays Lead Guitar', 'Ringo Starr plays Drums' ];
}

function johnLennonFacts() {
  return [ 'He was the last Beatle to learn to drive!!!', 'He was never a vegetarian!!!', 'He was a choir boy and boy scout!!!', 'He hated the sound of his own voice!!!' ];
}

function iLoveTheBeatles(parameter) {
  var array = [];
  if(parameter < 15){
    for(var i = 0; i < parameter + 1; i++){
      array.push("I love the Beatles!");
    }
  } else {
    array.push("I love the Beatles!")
  }
  return array;
}
