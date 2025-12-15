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
    switch (date.getDay()) {
        case 1:
            return "MO";
            break;
        case 2:
            return "TU";
            break;
        case 3:
            return "WE";
            break;
        case 4:
            return "TH";
            break;
        case 5:
            return "FR";
            break;
        case 6:
            return "SA";
            break;
        case 0:
            return "SU";
            break;
        default:
            break;
    }
}

date = new Date(2012, 0, 3);
console.log(date);
console.log(getWeekDay(date));
