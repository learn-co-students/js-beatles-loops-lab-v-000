'use strict';

function theBeatlesPlay(arr_mus, arr_inst) {
  var array = new Array();
  for (var i = 0; i <= arr_mus.length - 1; i++) {
    var string = arr_mus[i] + " plays " + arr_inst[i];
    array.push(string);
  };
  return array;
}

function johnLennonFacts() {
  var facts = new Array("He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice");
  var newArray = new Array();
  var i = 0;
  while(i < facts.length) {
    var string = facts[i] + "!!!";
    newArray.push(string);
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
 var array = new Array();
 do {
  array.push("I love the Beatles!");
  number++
 } while(number < 15);
 return array;
}


