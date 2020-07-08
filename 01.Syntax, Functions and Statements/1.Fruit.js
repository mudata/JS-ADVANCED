function solve(fruit,weight,price) {
    let neededmoney=calculatePrice(weight,price)
    console.log(`I need $${(neededmoney/1000).toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`)
    function calculatePrice(x,y){
    return x*y;
        }
}

solve('orange', 2500, 1.80);