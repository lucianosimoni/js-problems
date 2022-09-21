`
Accept only positive integers.
Multiply the value with itself subtracting 1 every turn till it reaches 1.
`

function factorialize(num) {
    let result = num
    for (let turn = 0; turn < num; turn++) {
        // result is initially 5.
        // 5 * (5 - 0) == 5*5= 
        console.log(result * (num - turn))
    }
}


console.log(factorialize(5))
// 120