let palaces:string[]=["Turkey","Egypt","Saudi Arabia","Canada","America"]

// Orignal order

palaces.forEach(element => {
    console.log(element);
});

// Alphabetical order

let AlphaArray:string[]=palaces.slice().sort()
AlphaArray.forEach(element => {
    console.log(element);
});

// Reverse alphabetical order

let RevAlphaArray:string[]=palaces.slice().sort().reverse()
RevAlphaArray.forEach(element => {
    console.log(element);
});