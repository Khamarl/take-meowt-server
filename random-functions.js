// helper functions to generate random outputs for primitive types and lists

function randomIndex(arr) {
    return Math.floor(Math.random * arr.length);
}

function randomInteger(start, end) {
    return Math.floor(Math.random * (end - start) + start);
}

function randomBoolean() {
    return Math.random < 0.5;
}

module.exports = {
    randomIndex,
    randomInteger,
    randomBoolean
}
