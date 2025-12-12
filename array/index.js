/* 
    Task 1
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
