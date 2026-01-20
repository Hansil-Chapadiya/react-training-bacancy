// this === window ---> this refers to current window object

/* var x = 10; // Global memory console
{
    var x = 11; // local memory console
    console.log(this.x);
}
console.log(this.x);


console.log(global === this); */


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


const user = {
    name: "Hansil",
    email: "@gmail.com",
    settings: {
        theme: "light"
    },

    pritnInfo: function () {
        const pritnInfo2 = () => {
            console.log(this.name);
            console.log(this.settings.theme);
        }
        // console.log(this.name);
        // console.log(this.settings.theme);
        pritnInfo2();
    },

    // pritnInfo2: () => {

    // }
}

const user2 = { ...user, name: "Admin" }

user.pritnInfo();
// user2.pritnInfo();