var ordinary_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ordinary_number.forEach(function (e) {
    if (e == 1) {
        console.log(e + "st");
    }
    else if (e == 2) {
        console.log(e + "nd");
    }
    else if (e == 3) {
        console.log(e + "rd");
    }
    else {
        console.log(e + "th");
    }
});
