`
function multiplesOf(whatNum, forHowManyTimes)
    variable listOfMultiples = []
    variable nextPushValue = whatNum

    for time in forHowManyTimes
        listOfMultiples push (nextPushValue)
        nextPushValue += whatNum
    
    return listOfMultiples

console.log( multiplesOf(5, 10) )
// should return the list of multiples of 5 10 times (?)

`

function multiplesOf(num, times) {
    let listOfMultiples = []
    let nextPushValue = num //Initially equal to the num

    for (let i = 0; i < times; i++) {
        listOfMultiples.push(nextPushValue)
        nextPushValue += num //Adds the num to the now used value
    }

    return listOfMultiples
}

console.log(multiplesOf(2, 10))
