function make_car(manufacturer:string, model:string,...optional):{manufacturer:string,model:string,}{
    let car:{manufacturer:string,model:string}={
        manufacturer:manufacturer,
        model:model,
    }
    for (let i:number = 0; i < optional.length; i++) {
        car[optional[i]] = optional[i];
      }
    return car
}
let car:{manufacturer:string,model:string}=make_car("Toyota", 'Camry', 'red', 'Manual')
console.log(car)
