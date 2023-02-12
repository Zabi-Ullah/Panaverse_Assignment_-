let guestLists:string[]=["Sulman Maqsood","Abu Baker","Adeel Ahmed"]

const outFriend=guestLists.pop()
console.log(outFriend+" sorry you can’t invite them to dinner.")

guestLists.forEach(element => {
    console.log("Dear " +element+ ", I would like to invite you to dinner.");
});

guestLists.pop()
guestLists.pop()