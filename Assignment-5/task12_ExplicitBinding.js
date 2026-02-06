/*

Explicit Binding Call Apply

*/


// Object Definition
const agent = {
    id: 101
};

// function to be bind
function showId() {
    console.log(this.id);
}

// Output
showId.call(agent); // Function is bind with object and this refer to that perticular object so it print 101
showId.apply(null); // it will print undefined because null has no such value like id
