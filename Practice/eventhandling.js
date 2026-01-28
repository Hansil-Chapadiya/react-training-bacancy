/*

Event delegation works because of event bubbling, where a parent element can handle events from its child elements using the event object’s target property.

*/

const app = document.getElementById("app");
const list = document.getElementById("list");

/*
------------------------------------
1️⃣ EVENT CAPTURING (Top → Down)
------------------------------------
*/
app.addEventListener(
    "click",
    () => {
        console.log("APP - Capturing");
    },
    true // 👈 enables capturing phase
);

/*
------------------------------------
2️⃣ EVENT BUBBLING (Bottom → Up)
------------------------------------
*/
app.addEventListener("click", () => {
    console.log("APP - Bubbling");
});

/*
------------------------------------
3️⃣ EVENT DELEGATION (Core Pattern 🔥)
------------------------------------
*/
list.addEventListener("click", (e) => {
    console.log("LIST handler");

    // e.target → actual element clicked
    // e.currentTarget → element having listener (ul)

    console.log("Clicked element:", e.target);
    console.log("Listener on:", e.currentTarget);

    // Only handle clicks on <li>
    if (e.target.classList.contains("item")) {
        console.log("Item text:", e.target.innerText);
    }
});

/*
------------------------------------
4️⃣ STOP PROPAGATION (Optional)
------------------------------------
*/
list.addEventListener("click", (e) => {
    // Uncomment to stop bubbling to APP
    // e.stopPropagation();
});





/* 
const btn1 = document.getElementById('id1');
const btn2 = document.getElementById('id2');
const btn3 = document.getElementById('id3');
const p = document.getElementById('p');


btn2.style.display = 'none';
btn3.style.display = 'none';
p.style.display = 'none';

btn1.addEventListener('click', () => {
    btn2.style.display = 'block';
    btn1.style.display = 'none';
});

btn2.addEventListener('click', () => {

    btn2.style.display = 'none';
    btn3.style.display = 'block';

});

btn3.addEventListener('click', () => {

    btn3.style.display = 'none';
    p.style.display = 'block';

});
 */
