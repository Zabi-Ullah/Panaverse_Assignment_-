var magicians = ["Ali", "Sulman", "Usman"];
function make_great(magicians) {
    var newArray = [];
    for (var i = 0; i < magicians.length; i++) {
        newArray[i] = "the Great " + magicians[i];
    }
    return newArray;
}
function show_magicians(magicians) {
    console.log("Magicians: ");
    magicians.forEach(function (element) {
        console.log(element);
    });
}
var array = make_great(magicians);
show_magicians(array);
