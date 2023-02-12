var guestLists = ["Sulman Maqsood", "Abu Baker", "Adeel Ahmed"];
var outFriend = guestLists.pop();
console.log(outFriend + " sorry you can’t invite them to dinner.");
guestLists.forEach(function (element) {
    console.log("Dear " + element + ", I would like to invite you to dinner.");
});
guestLists.pop();
guestLists.pop();
console.log(guestLists);
