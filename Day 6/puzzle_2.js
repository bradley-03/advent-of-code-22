const fs = require('fs');
const input = fs.readFileSync('Day 6/input.txt', 'utf8')

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
for (let i = 0; i < input.length; i++) {
    if (hasDuplicates(input.slice(i, i + 14)) == false) {
        console.log(i + 14)
        break
    }
}