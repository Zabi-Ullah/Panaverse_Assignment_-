// 36

function make_shirt(size, message):void {
    console.log(`The shirt is a size ${size} and has the message "${message}" printed on it.`);
}

make_shirt("large", "I love JavaScript");

//37

function make_shirt2(size:string="large", message:string="I love JavaScript"):void {
    console.log(`The shirt is a size ${size} and has the message "${message}" printed on it.`);
}

make_shirt2("large", "I love JavaScript");