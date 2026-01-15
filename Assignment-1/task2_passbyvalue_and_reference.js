const passbyval = (a,b) => {

    a = 10;
    b = 20;


}

const passbyreference = (obj) => {

    // obj.a_val = 10;
    // obj.b_val = 20;

    obj = {a_val : 90}
}

a = 14;
b = 28;

passbyval(a,b); 

console.log(a,b);

obj = {
    a_val : a,
    b_val : b
}

passbyreference(obj);

console.log(obj.a_val, obj.b_val);


/**
 * Technically js 
 * always pass by value
 * 
 * for ex:
 * 
 * passbyreference(o)
 * {
 *  o = {x : 10}
 * }
 * 
 * let obj = {x : 90};
 * 
 * passbyreference(obj);
 * 
 * console.log(obj);
 * 
 */