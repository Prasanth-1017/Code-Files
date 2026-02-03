let names: string[] = ["Sonic", "Mario", "Spiderman"];

let bools: boolean[] = [true, false];

let collection = ["Fruits", true, 12]; // Type Inference When Multiple Types Are Used

let value = collection[0]; // Type Inference For Variable From Collection Array

// Object Literal
let user: { name: string, mail: string, age: number } = {
    name: "John",
    mail: "johnuser@example.com",
    age: 39
}

let will: typeof user = {
    name: "William",
    mail: "william@example.com",
    age: 21
}

will["age"] = 22;
console.log(will);
