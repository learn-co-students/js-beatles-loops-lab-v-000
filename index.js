function theBeatlesPlay(musicians, instruments) {
    var array3 = []
    for (let i = 0; i < musicians.length; i++) {
        array3.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return array3
}


function johnLennonFacts(facts) {
    var i = 0
    while (i < facts.length) {
        facts[i] += "!!!"
            i++
    }
    return facts
}

function iLoveTheBeatles(n) {
    var array = []
    do {
        array.push("I love the Beatles!")
        n++
    } while (n < 15)
    return array
}
