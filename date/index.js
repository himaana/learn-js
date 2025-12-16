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

/* 
    Task 3
    European weekday

    European countries have days of week starting with Monday (nummber 1), then Tuesday (number 2) and till Sunday (number 7).

    Write a function getLocalDay(date) that returns the "European" day of week for date.
*/

function getLocalDay(date) {
    if (date.getDay() === 0) {
        return 7;
    }
    return date.getDay();
}

date = new Date(2012, 0, 3);
alert(getLocalDay(date));

/* 
    Task 4
    Which day of month was many days ago?

    Create a function getDateAgo(date, days) to return the day of month days ago from the date.

    for instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

    Should work reliably for days=365 or more

    P.S. The function should not modify the given date.
*/
function getDateAgo(date, days) {
    let daysAgo = new Date(date);
    daysAgo.setDate(date.getDate() - days);
    return daysAgo.getDate();
}

date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));
