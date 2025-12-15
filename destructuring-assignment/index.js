/* 
    Task 1
    Destructuring assignment
    We have an object:
    let user = {
        name: "John",
        years: 30
    };

    Write the destructuring assignment that reads:
        1. name property into the variable name.
        2. years property into the variable age.
        3. isAdmin property into the variable isAdmin (false, if no such property)
*/
let user = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);
