// Array Destructuring
const values = [1, 2, 3, 4, 5];
const [a, b, c, ...remains] = values;

console.log(`[ ${a}, ${b} ]`);
console.log(remains);

const details = {
    language: "JavaScript",
    concept: "Destructing And Spread Operator",
    print: "Array And Object Literal Using Backtick"
}

// Object Destructuring
const { ...data } = details;
console.log(data);