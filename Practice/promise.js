/* function add10(num) {

    setTimeout(() => {
        return Promise.resolve(num + 10).then(res => console.log(res));
    }, 1000);

}

add10(5) */

// Micro -> 

// Macro -> ST(C) ST(F) ST(J)

// Call ->  A B N E I M G 

console.log("A"); // 1

async function main() {
    console.log("B"); // 2

    setTimeout(() => {
        console.log("C");

        Promise.resolve().then(() => {
            console.log("D");
        });

    }, 0);

    await Promise.resolve().then(() => {
        console.log("E");

        setTimeout(() => {
            console.log("F");
        }, 0);
    });

    console.log("G"); 

    queueMicrotask(() => {
        console.log("H");
    });
}

main(); 

Promise.resolve().then(() => {
    console.log("I");

    queueMicrotask(() => {
        console.log("J");
    });
});

setTimeout(() => {
    console.log("K");

    Promise.resolve().then(() => {
        console.log("L");
    });

}, 0);

queueMicrotask(() => {
    console.log("M");
});

console.log("N");