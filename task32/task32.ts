let current_user: string[] = ["Zabi Ullah", "Sulman", "Abu Bakar", "Usman Bashir", "Ali"]
let new_user: string[] = ["Bilal khan", "Zabi Ullah", "Abu Bakar", "Moin", "Yahya"]

let flag: boolean = false
for (let i: number = 0; i < new_user.length; i++) {
    for (let j: number = 0; j < current_user.length; j++) {
        if (new_user[i] == current_user[j]) {
            flag = true
            break
        }
        else {
            flag = false
        }
    };
    if (flag) {
        console.log("Username has already been used.")
    }
    else {
        console.log("That the username is available.")
    }
};