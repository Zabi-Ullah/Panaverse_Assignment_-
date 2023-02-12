var current_user = ["Zabi Ullah", "Sulman", "Abu Bakar", "Usman Bashir", "Ali"];
var new_user = ["Bilal khan", "Zabi Ullah", "Abu Bakar", "Moin", "Yahya"];
var flag = false;
for (var i = 0; i < new_user.length; i++) {
    for (var j = 0; j < current_user.length; j++) {
        if (new_user[i] == current_user[j]) {
            flag = true;
            break;
        }
        else {
            flag = false;
        }
    }
    ;
    if (flag) {
        console.log("Username has already been used.");
    }
    else {
        console.log("That the username is available.");
    }
}
;
