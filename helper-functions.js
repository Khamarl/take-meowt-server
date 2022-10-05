// random functions to generate random outputs for primitive types and lists
function randomIndex(arr) {
    return Math.floor(Math.random * arr.length);
}

function randomInteger(start, end) {
    return Math.floor(Math.random * (end - start) + start);
}

function randomBoolean() {
    return Math.random < 0.5;
}

function randomIndices(arr, n) {
    result = [];
    for (let i = 0; i < n; i++) {
        while (true) {
            let randIndex = randomIndex(arr);
            if (! temperament.includes(arr[randIndex])) {
                result.push(randIndex);
                break;
            }
        }
    }

    return result;
}

module.exports = {
    randomIndex,
    randomInteger,
    randomBoolean,
    randomIndices
}
