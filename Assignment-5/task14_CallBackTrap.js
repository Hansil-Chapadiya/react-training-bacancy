/*

The "Callback" Context Trap

*/

// Object Definition
const player = {
    score: 50,
    updateScore() {
        setTimeout(function() { // call back function
            console.log(this.score); // this refer to that object which will bind with this function
        }, 100);
    }
};

// Ouptut
// Object Player is implicitly bind with updateScore() function 
// it will print undefined because inner function not defined with object so it will refer to global object 
// and global has no property named score so it will print undefined
player.updateScore();
