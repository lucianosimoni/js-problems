// FILTER
// DOES:  filtered down to just the elements from the given array that pass 
// the test implemented by the provided function.

// TASK: find the even numbers, and return a new array with them.

const nums = []
for (let i = 0; i < 100; i++) nums.push(i)

const evenNums = nums.find(num => {
    return num % 2 === 0
})
