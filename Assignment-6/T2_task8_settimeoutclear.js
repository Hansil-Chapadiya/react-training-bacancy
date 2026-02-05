/* ### Exercise 3: setTimeout with Clear


**Task:** Create a countdown timer that counts from 10 to 0, then stops.
 */

// javascript
// TODO: Implement countdown function

function countdown(start) {


    for (let index = start; index >= 0; index--) {

        setTimeout(() => {
            console.log(index);
        }, 1000 * (start - index));

    }
    // Should log numbers from start to 0, with 1 second between each
    // Should stop at 0


}
/* 
function countdown(start) {

    let timerId;
    function click(current) {

        console.log(current);
        if (current == 0) {
            clearTimeout(timerId);
            return;
        }

        timerId = setTimeout(() => click(current - 1), 1000);

    }

    click(start);
    console.log(timerId);

} */


countdown(10);
// Expected output:
// 10 (immediately)
// 9  (after 1 second)
// 8  (after 2 seconds)
// ...
// 0  (after 10 seconds)
