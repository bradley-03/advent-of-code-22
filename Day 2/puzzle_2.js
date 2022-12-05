const fs = require('fs')
const input = fs.readFileSync('Day 2/input.txt', 'utf8').split('\n')

const realMeanings = {
    rock: ["A", "X", 1],
    paper: ["B", "Y", 2],
    scissors: ["C", "Z", 3]
}

function convertMatch (match) {
    let buildArray = []
    for (const [key, value] of Object.entries(realMeanings)) {
        if (match[0] == value[0]) {
            buildArray[0] = key.toString()
        }
    }
    if (buildArray[0] == 'rock') {
        switch (match[1]) {
            case 'X':
                buildArray[1] = 'scissors'
                break;
            case 'Y':
                buildArray[1] = 'rock'
                break;
            case 'Z':
                buildArray[1] = 'paper'
                break;
        }
    } else if (buildArray[0] == 'paper') {
        switch (match[1]) {
            case 'X':
                buildArray[1] = 'rock'
                break;
            case 'Y':
                buildArray[1] = 'paper'
                break;
            case 'Z':
                buildArray[1] = 'scissors'
                break;
        }
    } else if (buildArray[0] == 'scissors') {
        switch (match[1]) {
            case 'X':
                buildArray[1] = 'paper'
                break;
            case 'Y':
                buildArray[1] = 'scissors'
                break;
            case 'Z':
                buildArray[1] = 'rock'
                break;
        }
    }
    return buildArray
}

function scoreFromMatch (match) {
    let accumulator = 0;

    switch (match[1]) {
        case 'rock':
            accumulator = 1
            break;
        case 'paper':
            accumulator = 2
            break;
        case 'scissors':
            accumulator = 3
    }

    if (match[0] == match[1]) {
        accumulator += 3
    } else if (match[1] == 'rock') {
        if (match[0] == 'scissors') {
            accumulator += 6
        }
    } else if (match[1] == 'paper') {
        if (match[0] == 'rock') {
            accumulator += 6
        }
    } else if (match[1] == 'scissors') {
        if (match[0] == 'paper') {
            accumulator += 6
        }
    }
    return accumulator
}

const matches = []

for (let match of input) {
    matches.push(convertMatch(match.split(' ')))
}
console.log(matches)

const scores = []
for (let match of matches) {
    scores.push(scoreFromMatch(match))
}

console.log(scores.reduce((a, c) => a + c))