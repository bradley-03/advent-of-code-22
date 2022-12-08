const fs = require('fs')
const input = fs.readFileSync('Day 3/input.txt', 'utf8').split('\n')

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

function halveInput (str) {
    const buildArray = []
    buildArray.push(str.slice((str.length / 2), str.length))
    buildArray.push(str.slice(0, (str.length / 2)))
    return buildArray
}

function getPriority (itemType) {
    if (itemType == itemType.toUpperCase()) { 
        return alphabet.indexOf(itemType.toLowerCase()) + 1 + 26 // return the priority of uppercase 
    } else {
        return alphabet.indexOf(itemType.toLowerCase()) + 1
    }
}

const rucksacks = []
for (const rucksack of input) {
    rucksacks.push(halveInput(rucksack))
}

const totals = []
for (const rucksack of rucksacks) {
    const row1 = rucksack[0].split('')
    const row2 = rucksack[1].split('')

    for (const item of row1) {
        if (row2.includes(item)) {
            totals.push(getPriority(item))
            break;
        }
    }
}

console.log(totals.reduce((a, b) => a + b)) // puzzle one output

const groups = []
for (let i = 0; i < input.length; i += 3) {
    const chunk = input.slice(i, i + 3);
    groups.push(chunk)
}

let badgeTotals = 0
for (let group of groups) {
    const commonElements = group[0].split('').filter((element) => {
        return group[1].split('').includes(element) && group[2].split('').includes(element);
    });
    badgeTotals += getPriority(commonElements[0])
}

console.log(badgeTotals) // puzzle two output
