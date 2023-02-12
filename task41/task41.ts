function show_magicians(array:string[]):void{
    array.forEach(element => {
        console.log(element)
    });
}

let magicians:string[]=["Ali","Sulman"]
show_magicians(magicians)