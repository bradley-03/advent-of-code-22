const fs = require('fs')
const input = fs.readFileSync('Day 6/input.txt', 'utf8')

const packets = input.match(/.{1,4}/g);

function hasDuplicates (str) {
    const dupes = []
    for (let l of str.split('')) {
        if (!dupes.includes(l)) {
            dupes.push(l)
        } else {
            return true
        }
    }
    return false
}

let count = 0
for (let packet of packets) {
    count+=4
    if (hasDuplicates(packet) == false) {
        console.log(count) // puzzle one output
        break
    }
}