function theBeatlesPlay(arrayM, arrayI) {

var array = [];

for (var i= 0; i< arrayM.length; i++){
  array.push(`${arrayM[i]} plays ${arrayI[i]}`);

}

return array;

}



function johnLennonFacts(facts) {
  var Nfacts = [];
var i = 0;
  while (i<facts.length) {

    Nfacts.push(`${facts[i]}!!!`);
    i++;
  }

  return Nfacts;

}

function iLoveTheBeatles(number) {

  var arrarE = [];

  do {
    arrarE.push("I love the Beatles!");
    number++;
  }while (number<15)

  return arrarE;
}
