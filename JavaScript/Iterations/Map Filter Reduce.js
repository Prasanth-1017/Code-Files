const values = [1, 2, 3, 4, 5];

// Filter
const evenIndices = values.filter((value, index) => index % 2 === 0);
console.log(evenIndices);
const evenNumbers = values.filter((value, index) => value % 2 === 0);
console.log(evenNumbers);

// Map
const squares = values.map(value => value * value);
console.log(squares);

// Reduce
// Combines Elements Into Single String Value
const allValues = values.reduce((accumulator, value) => accumulator + ", " + value);
console.log(allValues);