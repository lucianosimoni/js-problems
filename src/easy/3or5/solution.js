`
let finalSum = 0

for every number till 1000:
    if number is integer after dividing per 3:
        finalSum += number
`

let finalSum = 0

for (let i = 0; i < 1000; i++) {
    if (i % 3 || i % 5) {
        finalSum += i
    }
}

console.log(finalSum)
// 466335
