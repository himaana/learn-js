/* 
    Task1
    Filter unique array members
    Let arr be an array.
    Create a function unique(arr) that should return an array with unique items of arr.
    P.S. Here strings are used, but can be values of any type.
    P.S.S. Use Set to store unique values.
*/
function unique(arr) {
    return Array.from(new Set(arr));
}

let values = [
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "krishna",
    "Krishna",
    "Hare",
    "Hare",
    ":-O",
];

console.log(unique(values));

/* 
    Task 2
    Filter anagrams
    Anagrams are words that have the same number of same letters, but in different order.
    Write a function aclean(arr) that returns an array cleaned from anagrams.
*/
function aclean(arr) {
    let map = new Map();
    for (let value of arr) {
        let sortedValue = value.toLowerCase().split("").sort().join("");
        map.set(sortedValue, value);
    }
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

/* 
    Task 3
    Iterable keys
    We'd like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push .
    but that doesn't work:
    let map = new Map();
    
    map.set("name", "John");

    let keys = map.keys();

    // Error: keys.pushed is not a function
    keys.push("more");

    Why? How can we fix the code to make keys.push work?
*/
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys()); // Solution: add Array.from()
console.log(keys);

keys.push("more");
console.log(keys);
