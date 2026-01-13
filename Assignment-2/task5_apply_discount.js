const applyCoupon = (amount, couponCode) => {

    switch (couponCode) {
        case "SAVE10":
            console.log(amount - (amount * 10)/100);
            break;
            
        case "SAVE20":
            
            console.log(amount - (amount * 20)/100);    
            break;

        case "NONE":

            console.log("No Discount");   
            break;

        default:
            console.log("No item");
    }

}

applyCoupon(2000, "SAVE20")