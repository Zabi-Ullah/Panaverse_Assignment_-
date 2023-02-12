function make_car(manufacturer, model) {
    var optional = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optional[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < optional.length; i++) {
        car[optional[i]] = optional[i];
    }
    return car;
}
var car = make_car("Toyota", 'Camry', 'red', 'Manual');
console.log(car);
