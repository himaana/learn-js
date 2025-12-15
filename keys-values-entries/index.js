/* 
    Task 1
    Sum the properties
    There is a salaries object with arbitrary number of salaries.
    
    Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
    
    If salaries is empty, then result must be 0.
*/
function sumSalaries(salaries) {
    if (!Object.entries(salaries).length === 0) return 0;

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
