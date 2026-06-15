//Named function with default params
function calculateDiscount(price: number, rate: number = 0.50): void {  //passing some default value to paramater
    let discount = price * rate;
    console.log(`Discount Amount: ${discount}`);
}
calculateDiscount(1000); // 1000*0.50
calculateDiscount(1000, 0.30); //1000*0.30