# Array of Multiples

Given two numbers (number and length), create a list that contains the length number of multiples of the number. For example:

```text
(7, 5) ➞ [7, 14, 21, 28, 35]
(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
(17, 6) ➞ [17, 34, 51, 68, 85, 102]
```

// Plain
have a function that accepts both values
loop the number for the lenght amount also inputed
every loop adds the value of the number to be added to the next array key

// Pseudo
function multiplesOf(whatNum, forHowManyTimes)
    variable listOfMultiples = []
    variable nextPushValue = whatNum

    for time in forHowManyTimes
        listOfMultiples push (nextPushValue)
        nextPushValue += whatNum
    
    return listOfMultiples

console.log( multiplesOf(5, 10) )
// should return the list of multiples of 5 10 times (?)
