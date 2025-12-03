const cars = new Array("Suzuki", "Chevrolet", "Hyundai");
cars.push("Volkswagon");
console.log(cars);

let check = cars.includes("Hyundai");

if (check) {
    let index = cars.indexOf("Hyundai");
    if (index != -1)
        cars.splice(index, 1, "Tesla");
    console.log(cars);
}

// Remove Hyundai Replace Tesla

// Array Methods - https://www.w3schools.com/js/js_array_methods.asp