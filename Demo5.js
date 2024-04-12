let dishes = [
    {
        Name: "Burger",
        price: 300

    },
    {
        Name: "Kulcha",
        price: 30

    },
    {
        Name: "Vada Paw",
        price: 50

    },
    {
        Name: "BhelPuri",
        price: 30

    },
    {
        Name: "Pizza",
        price: 400

    }
]

function printArray(array) {
    for (let item of array) {
        console.log(item);
    }
}

function sortOnPrices(dish1, dish2) {
    //return dish1.price - dish2.price;
    return dish2.price - dish1.price;
}

dishes.sort(sortOnPrices);

printArray(dishes);