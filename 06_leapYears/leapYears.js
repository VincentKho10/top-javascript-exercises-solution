const leapYears = function(year) {
    // leap year divisible 4
    // not divisible 100
    // except 400
    return (year%4==0 && year%100>0)||year%400==0
};

// Do not edit below this line
module.exports = leapYears;
