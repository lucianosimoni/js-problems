// FizzBuzz
// ARRAY MAP METHOD
// Returns a 1:1 array with the conditions.

const nums = []

for (let i = 0; i < 100; i++) nums.push(i)

const fizzBuzzNums = nums.map(num => {
    if (num % 15 === 0) return 'FizzBuzz'
    else if (num % 3 === 0) return 'Fizz'
    else if (num % 5 === 0) return 'Buzz'
    else return num
})

console.log(fizzBuzzNums)