/* 
    Task 1
    Turn the object into JSON and back

    Turn the user into JSON and then read it back into another variable.
*/
let user = {
    name: "John Smith",
    age: 35,
};

let parseUser = JSON.parse(JSON.stringify(user));

console.log(parseUser);
