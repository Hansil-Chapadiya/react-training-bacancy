/*

Create three <div> elements with the class box.
Select all boxes using querySelectorAll and change the background color of each box to lightblue using forEach.


*/
// get divs by quesrySelectorAll
const divs = document.querySelectorAll('.box');

// get container by id
const container = document.getElementById('container');


// divs[0].style.backgroundColor = "lightblue";
// divs[0].style.height = "200px";
// divs[0].style.width = "200px";


divs.forEach((x) => {

    x.style.backgroundColor = "lightblue";
    x.style.width = "200px";
    x.style.height = "200px";
    // x.style.padding = "200px";
    x.style.margin = "50px";


});

container.style.display = 'flex';
container.style.direction = "row";