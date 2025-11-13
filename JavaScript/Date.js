const padding = (value) => {
    return value < 10 ? '0' + value : value
}

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const today = new Date();
const date = padding(today.getDate());
const month = padding(Out.getMonth() + 1);
const year = today.getFullYear();
const day = today.getDay();

console.log(`Date: ${date}-${(month)}-${year}`);
console.log(`Day:  ${days[day]}`);

console.log(`Time: ${today.toLocaleTimeString()}`);