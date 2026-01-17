// this === window ---> this refers to current window object

var x = 10; // Global memory console
{
    var x = 11; // local memory console
    console.log(this.x);
}
console.log(this.x);


console.log(global === this);


/*

In Browser
this === window // true
window === globalThis // true
var attaches to window // yes
let/const attach to window // no


In node

this === global // false
this === {} // true
var attaches to global // no
let/const attach to global // no

Because module wrapper:

(function (exports, require, module, __filename, __dirname) { ... })

*/