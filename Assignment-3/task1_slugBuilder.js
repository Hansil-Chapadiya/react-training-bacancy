/**
Exercise 1: The URL Slug Builder
Scenario: You have a blog post title, and you need to generate a URL-friendly "slug" (lowercase, hyphen-separated).
Input: "JavaScript For Beginners"
Task:
Convert the string to lowercase.
Split the string into words.
Join the words back together using hyphens (-).
Expected Output: "javascript-for-beginners"
*/

const readLine = require('readline');

const r = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

r.question('Enter feasible name for slug: ', (inputstr) => {

    let lowerstring = inputstr.toLocaleLowerCase();
    let splittedstring = lowerstring.split(' ');
    let slug = splittedstring.join('-');
    console.log("Output: ", slug);
    r.close();

});
