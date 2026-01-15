const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .then(data => console.log(data.name))
        .catch(error => console.error(`Error Fetching Data: ${error.message}`));
}

getData();

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        console.log(data.name);
    } catch (error) {
        console.error(`Error Fetching Data: ${error.message}`);
    }
}

fetchData();