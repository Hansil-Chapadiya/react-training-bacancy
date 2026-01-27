function once(fn) {

    let flag = false;
    let res;

    return function (...args) {
        if (!flag) {
            flag = true
            res = fn.apply(this, args);
            return res;
        }
        console.log("Function Executed Already");
        return res;
    };
}

    
const init = once(function (x) {

    return x * 2;


});

console.log(init(12));
console.log(init(25));