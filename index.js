const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay (musicians, instruments) {
  const empty = [];
  for(let index = 0; index < musicians.length; index++) {
    empty.push(`${musicians[index]} plays ${instruments[index]}`);
  }
  return empty;
}
function johnLennonFacts(facts) {
  const shoutedFacts = [];
  for ( let i = 0; i < facts.length; i++ ) {
      shoutedFacts.push(`${facts[i]}!!!`);
  }
  return shoutedFacts;
}

function iLoveTheBeatles(number) {
const array = [];
  do {
    array.push('I love the Beatles!')
    number++
  } while (number < 15)
  return array
}