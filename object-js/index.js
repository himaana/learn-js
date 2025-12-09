/*
    Task 1
    Hello, Object
    1. Create an empty object user.
    2. Add the property name with the value John.
    3. Add the property surname with the value Smith.
    4. Change the value of the name to Pete.
    5. Remove the property name from the object.
*/
let user = {};

user["name"] = "John";
console.log(user);

user["surname"] = "Smith";
console.log(user);

user.name = "Pete";
console.log(user);

delete user.name;
console.log(user);

/*
    Task 2
    Check for emptiness
    Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
*/
function isEmpty(obj) {
  for (props in obj) {
    return false;
  }
  return true;
}

let schedule = {};
console.log(isEmpty(schedule));

schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

/*
    Task 3
    Sum object properties
    We have an object storing salaries of our team:
    let salaries = {
        John : 100,
        Ann : 160,
        Pete : 130
    }
    Write the code to sum all salaries and store in the variable ssum. Should be 390 in the example above.
    If salaries is empty, then the result must be 0.
*/
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let props in salaries) {
  sum = sum + salaries[props];
}
console.log(sum);
