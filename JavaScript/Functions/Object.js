const fruit = {
    first: "Apple",
    print: function (first = this.first) {
        console.log(first);
    }
}

fruit.print();
fruit.print("Banana");