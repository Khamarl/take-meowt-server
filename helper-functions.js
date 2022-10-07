const fs = require("fs");
const path = require("path")

// random functions to generate random outputs for primitive types and lists
function randomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

function randomElement(arr) {
    return arr[randomIndex(arr)];
}

function randomInteger(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}

function randomBoolean() {
    return Math.random() < 0.5;
}

function randomIndices(arr, n) {
    result = [];
    for (let i = 0; i < n; i++) {
        while (true) {
            let randIndex = randomIndex(arr);
            if (!result.includes(randIndex)) {
                result.push(randIndex);
                break;
            }
        }
    }

    return result;
}

function randomFileLine(fileName) {
    const contents = fs.readFileSync(fileName, 'utf-8');
    const lines = contents.split(/\r?\n/).slice(0, -1);

    return lines[randomIndex(lines)];
}

module.exports = {
    randomIndex,
    randomElement,
    randomInteger,
    randomBoolean,
    randomIndices,
    randomFileLine
}
