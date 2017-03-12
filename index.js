function theBeatlesPlay(musicians, instruments){
   var array = [];
   for (var m = 0; m < 4; m++){
     array.push(`${musicians[m]} plays ${instruments[m]}`)
   }
   return array
}



function johnLennonFacts(facts){

    var i = 0;
    var array = [];
    while (facts[i]){
       array.push(`${facts[i]}!!!`);
      i++;
    }
    return array
  }

function iLoveTheBeatles (number){
    
    var array = [];
    do {
    array.push("I love the Beatles!");
    number++;
    } while (number < 15);

  return array
}
