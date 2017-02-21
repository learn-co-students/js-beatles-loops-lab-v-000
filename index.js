function theBeatlesPlay(musicians, instruments) {
var playersAndInstruments = []
for (var i=0; i<4; i++) {
playersAndInstruments.push(musicians[i] + " plays " + instruments[i])
}
return playersAndInstruments

}
//function johnLennonFacts(facts) {
  //while (facts!==0) {
    //return johnLennonFacts + "!!!"
  //}
//}
function johnLennonFacts(facts){
var factNum = 0;
var jLFacts = []
while (factNum <facts.length) {
jLFacts.push(facts[0] + "!!!")
factNum++;
}
return jLFacts
}
