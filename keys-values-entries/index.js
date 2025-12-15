/* 
    Task 1
    Sum the properties
    There is a salaries object with arbitrary number of salaries.
    
    Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
    
    If salaries is empty, then result must be 0.
*/
function sumSalaries(salaries) {
    let totalSalaries = 0;
    for (const salary of Object.values(salaries)) {
        totalSalaries += salary;
    }
    return totalSalaries;
}
let salaries = {
    John: 100,
    Pete: 300,
    mary: 250,
};

console.log(sumSalaries(salaries));

/* 
    Task 2
    Count properties
    Write a function count(obj) that returns the number of properties in the object:

    let user = {
        name: 'John',
        age: 30,
    };

    console.log(count(user));

    try to make the code as short as possible.
    P.S. Ignore symbolic properties, count only "reguler" ones.
*/

function count(obj) {
    let countProp = 0;
    for (const prop of Object.keys(obj)) {
        countProp += 1;
    }
    return countProp;
}

let user = {
    name: "John",
    age: 30,
};

console.log(count(user));
