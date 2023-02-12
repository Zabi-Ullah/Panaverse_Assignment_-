
// 1 simple method

let guestLists:string[]=["Sulman Maqsood","Abu Baker","Adeel Ahmed"]

guestLists[1]="Usman Bashir"
guestLists.forEach(element => {
    console.log("Dear " +element+ ", I would like to invite you to dinner.");
});

// 2 simple method

let guestLists2:string[]=["Sulman Maqsood","Abu Baker","Adeel Ahmed"]

let newFriend:string="Usman Bashir"
let index:number=guestLists2.indexOf("Abu Baker")

if (index > -1) {
    guestLists2.splice(index, 1, newFriend);
  }
  guestLists2.forEach(element => {
    console.log("Dear " +element+ ", I would like to invite you to dinner.");
});