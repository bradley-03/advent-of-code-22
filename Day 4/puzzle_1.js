const fs = require('fs')
const input = fs.readFileSync('Day 4/input.txt', 'utf8').split('\n')

const pairs = []
for (let pair of input) {
    let tempPair = pair.split(',')
    pairs.push([tempPair[0].split('-'), tempPair[1].split('-')])
}

let counter = 0
for (let pair of pairs) {
    if (parseInt(pair[1][0]) >= parseInt(pair[0][0]) && parseInt(pair[1][1]) <= parseInt(pair[0][1]) || parseInt(pair[0][0]) >= parseInt(pair[1][0]) && parseInt(pair[0][1]) <= parseInt(pair[1][1])) {
        counter++
    }
}

console.log(counter) // puzzle one output