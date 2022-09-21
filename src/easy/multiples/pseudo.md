# Pseudo Code Solution

function multiplesOf(whatNum, forHowManyTimes)
    variable listOfMultiples = []
    variable nextPushValue = whatNum

    for time in forHowManyTimes
        listOfMultiples push (nextPushValue)
        nextPushValue += whatNum
    
    return listOfMultiples

console.log( multiplesOf(5, 10) )
// should return the list of multiples of 5 10 times (?)
