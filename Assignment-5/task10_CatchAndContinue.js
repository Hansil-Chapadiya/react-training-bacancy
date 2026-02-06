/*

Catch And Continue

*/

// Promise is rejected here 
Promise.reject("Fail") 
    .catch((err) => { // Fail passed as error message in catch block
        console.log(err); // Message will print here
        return "Recovered"; // and return recovered 
    })
    .then((res) => console.log(res)); // returned recovered  will print here 

// Output 
// Fail 
// Recovered 
