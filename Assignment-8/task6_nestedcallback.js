/*

Create three functions step1, step2, and step3, each accepting a callback and completing after 1 second using setTimeout.
Call them in sequence using nested callbacks.
Log "All steps finished" only after step3 completes.


*/

function step1(callback1) {

    setTimeout(() => {
        console.log("Step1 Executing...")
        callback1(step3);
    }, 1000)

}

function step2(callback2) {

    setTimeout(() => {
        console.log("Step2 Executing...");
        callback2();
    }, 1000);

}

function step3(callback3) {

    setTimeout(() => {
        console.log("Step3 Executing");
        callback3();
    }, 1000)

}

// callback hell
step1(() => {

    step2(() => {

        step3(() => {

            console.log("All logs finished");

        })

    })

})