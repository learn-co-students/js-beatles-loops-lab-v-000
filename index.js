function theBeatlesPlay(arrayMusicians, arrayInstruments) {
    let emArr = [];
    for(let i = 0; i < arrayMusicians.length; i++) {
        emArr.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`)
    }
    return emArr;
}

function johnLennonFacts(facts) {
    let i = 0;
    while(i < facts.length) {
      facts[i] = facts[i] + "!!!";
      i++;
    }
    return facts
}

function iLoveTheBeatles(number) {
    let emArr = [];
    do {
        emArr.push("I love the Beatles!");
        number++;
    } while (number < 15)
    return emArr
}
