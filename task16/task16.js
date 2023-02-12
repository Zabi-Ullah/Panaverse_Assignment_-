var guestLists = ["Sulman Maqsood", "Abu Baker", "Adeel Ahmed"];
// Add in Bigning
guestLists.unshift("Usman Bashir");
// Add in Center
var center = Math.floor(guestLists.length / 2);
guestLists.splice(center, 0, "Usman Khalid");
// Add in End
guestLists.push("Bilal Khan");
guestLists.forEach(function (element) {
    console.log("Dear " + element + ", I would like to invite you to dinner.");
});
