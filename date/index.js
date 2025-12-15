/* 
    Task 1
    Create a date

    Create a Date object for the date: Feb 20, 2012, 3:12 am. The time zone is local.

    Show it using alert.
*/
let date = new Date(Date.parse("2012-02-20T03:12"));
alert(date);

/* 
    Task 2
    Show a weakday

    Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
*/
function getWeekDay(date) {
    let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

    return days[date.getDay()];
}

date = new Date(2012, 0, 3);
console.log(getWeekDay(date));
