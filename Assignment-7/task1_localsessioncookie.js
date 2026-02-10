const local = document.getElementById('local');
const getname = document.getElementById('inputname');
const session = document.getElementById('session');
const createCookie = document.getElementById('cookiestore');

const outputlocal = document.getElementById('outputlocal');
const outputSession = document.getElementById('outputsession');
const outputcookie = document.getElementById('outputcookie');

local.addEventListener("click", (e) => {

    e.preventDefault();
    localStorage.setItem("name", getname.value);
    sessionStorage.setItem("name", getname.value);

    outputlocal.innerHTML = "Saved to LocalStorage<br>";
    outputSession.innerHTML = "Saved to SessionStorage<br>";

});

session.addEventListener("click", (e) => {

    e.preventDefault();
    outputlocal.innerHTML = "Name : " + localStorage.getItem("name") + " Data fetch Successfully in localstorage<br>";
    outputlocal.style.color = "RED";
    outputSession.innerHTML = "Name : " + sessionStorage.getItem("name") + " Data fetch Successfully in SessionStroge<br>";
    outputSession.style.color = "RED";

});

createCookie.addEventListener("click", (e) => {

    e.preventDefault();
    document.cookie = "name=" + getname.value;
    outputcookie.innerHTML = "Saved to Cookie<br>";
    console.log(document.cookie);
})



/*

What happen on page refresh

-> on page refresh session storage content remain as it is
-> on page refress localstorage content remain as it is
-> on page refresh cookie contnt also remain as it as


What happen on tab is closed 

-> on tab closed sessiostorage content will cleard but cookie and localstorage content remain as it is

*/