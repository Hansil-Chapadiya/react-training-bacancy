async function calculate() {

    const a = await add10(5);
    const b = await add10(a);
    console.log(b);
}

function add10(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num + 10);
        }, 1000)
    })
}

calculate();