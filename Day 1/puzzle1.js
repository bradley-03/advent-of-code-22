const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8').split('\n')

let amount = 0
const totals = []

for (let line of input) {
    if (line == "") {
        totals.push(amount)
        amount = 0
    } else {
        amount = amount + parseInt(line)
    }
}
// Puzzle 1
console.log(Math.max(...totals))

// Puzzle 2 
const top3 = totals.sort((a, b) => b - a).slice(0, 3)
console.log(top3.reduce((a, c) => a + c))
