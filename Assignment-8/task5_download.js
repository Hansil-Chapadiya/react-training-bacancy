/*

Write a function downloadFile(url, callback) that simulates a 3-second delay using setTimeout.
After the delay, log "Download complete: [url]" and execute the callback function.


*/

// callback 
function callback() {
    console.log("Call back Executed");
}

// function declaration
function downloadFile(url, callback) {
    setTimeout(() => {
        console.log(`Download complete:${url}`);
        callback();
    }, 3000);
}

downloadFile("http://www.youtube.com", callback);