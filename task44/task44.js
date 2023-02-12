function make_sandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("Your Orderd Summary", item);
}
make_sandwich("bread", "lettuce", "tomato", "mayo");
make_sandwich("bread", "lettuce", "peanut butter", "jelly");
make_sandwich("bread", "lettuce");
