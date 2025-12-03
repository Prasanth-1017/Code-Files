function print(display, message) {
    return display(message);
}

function display(message) {
    console.log(message);
}

let text = "The message has been logged in console using callback function";
display(text);