/**
 * Promo code = JUMBO
 * 30%off on the amount | amount must be greater than 150
 * 
 * Promo Code = BINGO
 * 50%off on the amount greater than 300 but upto 200
 */

let amount = 500;
let PromoCode = "BINGO";

if (PromoCode == "JUMBO" && amount > 150) {
    let discount = 0.30 * amount;
    amount -= discount;
    console.log("Discount is: " + discount);
    console.log("Promo Code [JUMBO} Applied. Please pay: " + amount);
} else if (promoCode = "BINGO" && amount > 300) {
    let discount = 0.50 * amount;

    if (discount > 200) {
        discount = 200;
    }

    amount -= discount;

    console.log("Discount is: " + discount);
    console.log("Promo Code [BINGO} Applied. Please pay: " + amount);

}else {
    console.log("Invalid Promo Code or Amount Insufficient")
}