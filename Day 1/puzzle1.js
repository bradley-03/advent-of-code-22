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

console.log(Math.max(...totals))
