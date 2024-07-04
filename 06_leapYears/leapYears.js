const leapYears = function(leapYear) {
    let isLeapYear;
    if ((leapYear % 4 === 0 && leapYear % 100 !== 0 && leapYear % 400 !== 0) || 
    (leapYear % 4 === 0 && leapYear % 100 === 0 && leapYear % 400 === 0)) {
        isLeapYear = true;
    }
    else {
        isLeapYear = false;
    }
return isLeapYear; 
}
// Do not edit below this line
module.exports = leapYears;
