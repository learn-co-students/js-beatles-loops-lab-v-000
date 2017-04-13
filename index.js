function theBeatlesPlay (musicians, instruments) {
    var array = []
    for (let n = 0, array_length = musicians.length; n < array_length; n++) {
        array.push(`${musicians[n]} plays ${instruments[n]}`)
    }

    return array
}

function johnLennonFacts (facts) {
    var array = []
        for (let n = 0, array_length = facts.length; n < array_length; n++ ) {
        array.push(`${facts[n]}!!!`)
    }

    return array 
}

function iLoveTheBeatles(n) {
    var array = []
    do {
        array.push("I love the Beatles!")
        n++
    } while (n < 15)

    return array
}