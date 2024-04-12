let user = {
    Name : 'Himanshu',
    Email : 'himanshu@example.com',
    Phone : '+91-9999944444',
    address:{
        BuildingName : 'Rohan Nilayam',
        StreetName : 'Taza Kitchen Lane',
        City : 'Hyderabad',
        State : 'Telangana',
        Pin : '500049'
    },
    Orders : [
        {
            Oid : 101,
            item : 'Shoe',
            price : 3000,
            date : '20th June, 2023'
        },
        {
            Oid : 201,
            item : 'Cooler',
            price : 6000,
            date : '27th June, 2023'
        }
    ] 

}
console.log("User object is: ");
console.log(user);
console.log(typeof user);
console.log("User Name is: "+user.Name);
console.log("Order on "+user.Orders[1].date+" has a price of "+user.Orders[1].price);

let dish1 = {
    DishID : 10,
    Name : 'Burger',
    price : 200,
    category : 'Veg'
}

let dish2 = {
    DishID : 20,
    Name : 'Pizza',
    price : 250,
    category : 'Italilan'
}

dish1.price = 250;
dish2.price = 300;

console.log("Dish1 is: "+dish1);
console.log(dish1);
console.log("Dish2 is: "+dish2);
console.log(dish2);