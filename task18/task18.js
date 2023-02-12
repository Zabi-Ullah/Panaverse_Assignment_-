var palaces = ["Turkey", "Egypt", "Saudi Arabia", "Canada", "America"];
// Orignal order
palaces.forEach(function (element) {
    console.log(element);
});
// Alphabetical order
var AlphaArray = palaces.slice().sort();
AlphaArray.forEach(function (element) {
    console.log(element);
});
// Reverse alphabetical order
var RevAlphaArray = palaces.slice().sort().reverse();
RevAlphaArray.forEach(function (element) {
    console.log(element);
});
