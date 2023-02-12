// 36
function make_shirt(size, message) {
    console.log("The shirt is a size ".concat(size, " and has the message \"").concat(message, "\" printed on it."));
}
make_shirt("large", "I love JavaScript");
//37
function make_shirt2(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love JavaScript"; }
    console.log("The shirt is a size ".concat(size, " and has the message \"").concat(message, "\" printed on it."));
}
make_shirt2("large", "I love JavaScript");
