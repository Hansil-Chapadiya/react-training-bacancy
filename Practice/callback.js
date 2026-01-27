// function multiplyBy2(num, cb) {

//     setTimeout(() => {
//         cb(null, num*2);
//     }, 1000)
// }

// multiplyBy2(5, (err, result1)=>{
//     if (err) return console.error(err);

//     multiplyBy2(result1,(err, result2)=>{
//         if (err) return console.error(err);

//         console.log(result2);
//     })
// })

let name1 = "Alice";
function greet(name1, cb) {

    setTimeout(() => {
        cb(null, message + name1);
    }, 1000)

}

message = "Hello";
name2 = "Anna"
greet(name1, (err, msg) => {
    if (err) console.error(err);

    greet(name2, (err, msg1) => {

        if (err) console.log(err);

        console.log(msg1)
    })

})
