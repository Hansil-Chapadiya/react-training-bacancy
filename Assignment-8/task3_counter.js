/*

Create a button with text "Clicks: 0".
Initialize a variable count = 0.
On each button click, increment count and update the button text accordingly.

*/

const clicks = document.getElementById('click');

// initalize counter
let counter = 1;

// add eventlistener 
clicks.addEventListener("click", () => {

    clicks.innerText = "clicks: " + counter;
    clicks.style.width = "100px";
    clicks.style.height = "100px";
    clicks.style.backgroundColor = "Red";
    clicks.style.color = "white";
    counter++;

});