values = [1, 2, 3, 5, 10];
console.log(values.slice(1, 3));
console.log(values);

console.log(values.splice(1, 3));
console.log(values);

values.splice(2, 0, 20);
console.log(values);