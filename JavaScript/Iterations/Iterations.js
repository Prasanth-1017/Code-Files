const fruits = ["Apple", "Banana", "Grape"];

// For In Loop
edibles = [];
for (let i in fruits)
    edibles.push(i);
console.log(edibles);

// For Of Loop
edibles = [];
for (let i of fruits)
    edibles.push(i);
console.log(edibles);

// For Each Loop
edibles = [];
fruits.forEach(fruit => edibles.push(fruit));
console.log(edibles);