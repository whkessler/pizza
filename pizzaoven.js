function pizzaoven(crust,sauce,cheese,toppings) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    
    return pizza;
}
var pizza1 = pizzaoven("deep dish","traditional","mozzarela",["pepperoni","sausage"]);
console.log(pizza1);
var pizza2 = pizzaoven( "hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
console.log(pizza2);
var pizza3 = pizzaoven("thin","alfredo",["mozzarella","feta"],["onions","spinach","olives","roasted red pepper"]);
console.log(pizza3);
var pizza4 = pizzaoven("deep dish","traditional","mozzarella",["pepperoni","sausage","ham","bacon"]);
console.log(pizza4)