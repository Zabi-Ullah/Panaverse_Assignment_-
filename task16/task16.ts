let guestLists:string[]=["Sulman Maqsood","Abu Baker","Adeel Ahmed"]

// Add in Bigning
guestLists.unshift("Usman Bashir")

// Add in Center
let center:number=Math.floor(guestLists.length/2)
guestLists.splice(center,0,"Usman Khalid")

// Add in End
guestLists.push("Bilal Khan")

guestLists.forEach(element => {
    console.log("Dear " +element+ ", I would like to invite you to dinner.");
});

