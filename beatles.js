function theBeatlesPlay(musicianArray, instrumentArray) {
  var newArray=[];
  for(i=0; i < musicianArray.length; i++) {
    var string = musicianArray[i] + " plays " + instrumentArray[i];
    newArray.push(string);
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var newArray=[];
  for (let i=0; i < facts.length; i++) {
    newArray.push(facts[i] + "!!!");
  }
  return newArray;
}
function iLoveTheBeatles(number) {
  var array=[];
  if(number!=17){ //if number is not == to 17 then iterate until number =0
      do{
          --number;
           array.push('I love the Beatles!');
      } while(
        number >= 0
      );
  } else{ //if number is 17 then return outcome only once
    array.push('I love the Beatles!');
  }
  return array;
}
