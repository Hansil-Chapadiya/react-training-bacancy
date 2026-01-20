/*

Exercise 8: The Safe Update
Scenario: You need to update a user's theme setting without mutating the original object.
Input:
JavaScript
const settings = { theme: "light", notifications: true };


Task:
Create a new variable newSettings.
Use the Spread Operator (...) to copy the properties from settings.
Overwrite the theme to "dark" inside the new object.
Verify settings.theme is still "light" (Immutable Check).


*/

const settings = { theme: "Light", notifiction: true };

const newSettings = { ...settings, theme: "Dark" };

// settings theme
console.log(settings.theme);

// newSettings theme
console.log(newSettings.theme);
