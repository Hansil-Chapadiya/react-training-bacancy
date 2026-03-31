/*

Create an HTML file with a paragraph <p id="secret-message">Initial Text</p> and a button.
On button click, select the paragraph using getElementById and change its text to "You found the secret message!".


*/

// get <btn> element by id
const show = document.getElementById('show');

// get <p> element  by Id
const secret = document.getElementById('secret-message');


// add event listener on button
show.addEventListener("click", ()=>{
    secret.innerText = "You found the secret message!";
    secret.style.color = "RED";

});