// function calculateTotalPrice(price, quantity) {

//     return price * quantity;
// }


const calculateTotalPrice = (price, quantity) => {
    if (price <= 0 || quantity <= 0)
    {
        throw new Error("Price or Quantity can't be negative");
        
    }
    return price * quantity;
}

console.log(calculateTotalPrice(20, -1))