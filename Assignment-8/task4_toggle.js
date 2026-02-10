/*

 Create a <div> with a black border and white background.
Define a CSS class .active that changes the background to green and text color to white.
On click, toggle the .active class using classList.toggle().


*/
// get elements
const div = document.getElementsByClassName('box');
const click = document.getElementById('click');

// add eventlistener 
click.addEventListener("click", () => {

    div[0].classList.toggle('active');
})
