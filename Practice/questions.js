const transactions = [
    { userId: 1, type: "credit", amount: 500 },
    { userId: 2, type: "debit", amount: 200 },
    { userId: 1, type: "debit", amount: 1000 },
    { userId: 3, type: "credit", amount: 700 },
    { userId: 2, type: "credit", amount: 300 },
    { userId: 1, type: "credit", amount: 200 }
];

const netbal = transactions.reduce((acc, obj) => {

    //take current credit/debit balance from object  
    val = obj.type == "credit" ? obj.amount : -obj.amount;

    //take existing user from accumulator
    /* const sameUser = acc.filter((x) => {
        return x.userId == obj.userId
    }); */

    const sameUser = acc.find(x => x.userId == obj.userId);

    // if same user find then +/- balance
    /* if (sameUser.length > 0) {
        sameUser[0].balance += val;
        } */
    if (sameUser) {
        sameUser.balance += val;

    }
    else { // if user not existing obj push in accumulator
        acc.push({
            userId: obj.userId,
            balance: val
        })
    }
    return acc;
}, []).filter(x => x.balance > 0).sort((a, b) => b.balance - a.balance);


console.log(netbal);