const fs = require('fs')
const input = fs.readFileSync('Day 5/input.txt', 'utf8').split('\n')

const rows = []
for (let i = 0; i < 8; i++) { // sort rows into column equivalent
    const saltedString = input[i].replace(/(.{3})./g,"$1")
    rows.push(saltedString.match(/.{1,3}/g))
}

const columns = []
for (let i = 0; i < 9; i++) { // create the 9 columns
    columns.push([])
} 

for (let row = 7; row >= 0; row--) { // loop for each row
    for (let i = 8; i >= 0; i--) { // loop for each column
        if (rows[row][i] !== '   ') {
            columns[i].push(rows[row][i])
        }
    }
}

const instructions = input.splice(10) // separate instructions from grid

for (let instruction of instructions) {
    const sInst = instruction.split(" ")

    const removedItems = columns[parseInt(sInst[3]) - 1].slice(columns[parseInt(sInst[3]) - 1].length - parseInt(sInst[1]))
    for (let i = 0; i < removedItems.length; i++) {
        columns[parseInt(sInst[3]) - 1].pop()
    }
    
    if (removedItems) {
        columns[parseInt(sInst[5]) - 1].push(...removedItems.reverse())
    }
}

const topStacks = []
for (let column of columns) {
    topStacks.push(column[column.length - 1][1])
}

console.log(`puzzle 1: ${topStacks.join('')}`) // puzzle 1 output