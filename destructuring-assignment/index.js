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

/* 
    Task 2
    The maximal salary
    
    There is a salaries object:

    let salaries = {
            "John": 100,
            "Pete": 300,
            "Marcy": 250
    };

    Create the function topSalary(salaries) that returns the name of the top-paid person.
    • if salaries is empty, it should return null.
    • if there are multiple top-paid persons, return any of them.

    P.S. Use Object.entries() and destructuring to iterate over key/values pairs.
*/
function topSalary(salaries) {
    let topPerson = null;
    let topPersonSalary = 0;

    for (const [key, value] of Object.entries(salaries)) {
        if (topPersonSalary < value) {
            topPerson = key;
            topPersonSalary = value;
        }
    }

    return topPerson;
}

let salaries = {
    John: 100,
    Pete: 300,
    Marcy: 250,
};

console.log(topSalary(salaries));
