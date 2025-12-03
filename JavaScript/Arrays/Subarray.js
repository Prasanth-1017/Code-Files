values = [1, 2, 3, 5, 10];
subarray = [];

for (let i=0; i<values.length; i++) {
    for (let j=i+1; j<=values.length; j++) {
        subarray.push(values.slice(i, j));
    }
}

for (let i=0; i<subarray.length; i++)
    console.log(subarray[i]);