/**
 * inner one shadows outer one.
 * means variable inside scope has same name as outer scope
 * let x = 10;
 * {
 *  let x  = 10;
 * }
 * 
 */

let x  = 10;
{
    let x = 11;
    console.log(x);
}
console.log(x);


for (let x  = 10; x <=20; x++)
{
    console.log(x);
}


/**
 * This is not shadowing 
 * let x = 10;
 * x = 20; You didn't redeclare is , you just reassign it means overwriting 
 */