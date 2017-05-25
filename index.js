//excersice 1

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

  function theBeatlesPlay(musicians, instruments) {

    var whoPlayswhat = [];

    for (let i=0; i<musicians.length; i++) {

      whoPlayswhat.push(musicians[i] + ' plays ' + instruments[i])
    }

    return whoPlayswhat

  }

console.log(theBeatlesPlay(musicians, instruments))


//excersice 2

  function johnLennonFacts() {
    var funFacts = []
    const facts = [
      "He was the last Beatle to learn to drive",
      "He was never a vegetarian",
      "He was a choir boy and boy scout",
      "He hated the sound of his own voice"
    ]
    var i = 0

    while (i<facts.length) {
      funFacts.push(facts[i] + '!!!')
      i++
      }
      return funFacts

  }

//excersice 3

  function iLoveTheBeatles(n) {
    var word = []

    do {
        word.push('I love the Beatles!')
        n++
    }
    while (n >7 && n<15)

    return word
  }
