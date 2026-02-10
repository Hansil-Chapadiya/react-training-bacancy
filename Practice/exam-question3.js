async function summaryData() {

    const [user, postcount, commentcount] = await Promise.all([

        await new Promise((resolve, reject) => {

            resolve("Leanne Graham");

        }),
        await new Promise((resolve) => {

            resolve(10);

        }),
        await new Promise((resolve) => {
            
            resolve(5);
        })
    ]);

    return { summury: { user, postcount, commentcount } };
}

summaryData().then(result => {
    console.log(result);
});