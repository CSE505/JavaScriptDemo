let prompt = require('prompt-sync')();

let menu = {
    burger : 200,
    pizza : 300,
    fries : 50,
    cola : 80,
    noodles : 30
    }

    let cart = [];
    console.log("Cart is: "+cart+ "items: "+cart.length);

    while(true){
        let dishName = prompt("Enter Dish to Add to cart: ")

        if(dishName == "quit"){
            break;
        }

        let dish = {
            name : dishName,
            price : menu[dishName]
        }

        cart.push(dish);
    }

    console.log("Final cart is : "+cart);
    console.log(cart);
    console.log("Total items in cart : "+cart.length);

    console.log("Dishes in cart: ");
    let totalAmount = 0;
    for(let dish of cart){
        console.log(dish);
        totalAmount += dish.price;
    }

    console.log("Total amount of cart: "+totalAmount);