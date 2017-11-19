"use strict"; 
var theBeatlesPlay = function(musicians, instruments) {
  var results = []; 
  for (var i = 0; i < musicians.length; i++) {
    results.push(musicians[i] + " plays " + instruments[i]); 
  }
  return results; 
}

var johnLennonFacts = function(facts) {
  var i = 0; 
  var results = []; 
  while(i < facts.length) {
    results.push(facts[i]+"!!!");  
    i++; 
  }
  return results; 
}

var iLoveTheBeatles = function(number){
  var results = []; 
  do {
    results.push("I love the Beatles!");  
    number++;   
  } while (number < 15); 
  return results; 
}
