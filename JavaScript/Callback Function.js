const numbers = [-1, 2, -3, 4];
const positive = find(numbers, (value) => value >= 0);

function find(numbers, callback) {
    const result = [];
    for (const value of numbers)
        if (callback(value))
            result.push(value);
    return result;
}

console.log(positive);