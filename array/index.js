/* 
    Task 2
    1. Create an array styles with items "Jazz" and "Blues"
    2. Append "Rock-n-Roll" to the end.
    3. Replace the value in the middle "Classics". Your code for finding the middle value should work for any arrays with odd length.
    4. Strip off the first value of the arry and show it.
    5. Prepend Rap and Reggae to the array.
*/
styles = ["Jazz", "Blues"];
console.log(styles);
styles.push("Rock-n-Roll");
console.log(styles);
styles[styles.length % 2] = "Classics";
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift("Rap", "Reggae");
console.log(styles);

/* 
    Task 4
    Sum input numbers
    Write the function sumInput() that:
    1. Asks the user for values using prompt and stores the values in the array
    2. Finishes asking when the user enters a non-numeric value, an empty string, or presses "Cancel".
    3. Calculates and returns the sum of array items.
    P.S. A zero 0 is a valid number, please don't stop the input on zero.
*/
function sumInput() {
    let arrInput = [];
    let userInput = prompt("What value you want to be stored?", 0);
    while (userInput != null && userInput != "") {
        userInput = Number(userInput);
        if (!isNaN(userInput)) {
            arrInput.push(userInput);
            userInput = prompt("What value you want to be stored?", 0);
        }
    }
    let sum = 0;
    for (let value of arrInput) {
        sum += value;
    }
    return sum;
}

console.log(sumInput());
