function Sum (a: number, b: number): string {
    return `Sum: ${a+b}`;
}

console.log(Sum(9, 10));

const Sub = (a: number, b: number): string => {
    return `Sub: ${a-b}`;
}

console.log(Sub(10, 9));

// Should Annotate Parameters
// Annotating Return Type Isn't Mandatory But Benefits Ensuring When Annotated
