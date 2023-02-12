// 1 simple method
var guestLists = ["Sulman Maqsood", "Abu Baker", "Adeel Ahmed"];
guestLists[1] = "Usman Bashir";
guestLists.forEach(function (element) {
    console.log("Dear " + element + ", I would like to invite you to dinner.");
});
// 2 simple method
var guestLists2 = ["Sulman Maqsood", "Abu Baker", "Adeel Ahmed"];
var newFriend = "Usman Bashir";
var index = guestLists2.indexOf("Abu Baker");
if (index > -1) {
    guestLists2.splice(index, 1, newFriend);
}
guestLists2.forEach(function (element) {
    console.log("Dear " + element + ", I would like to invite you to dinner.");
});
