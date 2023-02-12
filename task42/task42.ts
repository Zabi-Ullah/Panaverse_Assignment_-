let magicians:string[] = ["Ali", "Sulman", "Usman"];

function make_great(magicians):void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "the Great " + magicians[i];
  }
}

function show_magicians(magicians):void {
  console.log("Magicians: ");
  for (let magician of magicians) {
    console.log(magician);
  }
}

make_great(magicians);
show_magicians(magicians);