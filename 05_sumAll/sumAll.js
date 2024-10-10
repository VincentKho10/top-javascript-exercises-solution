const sumAll = function(o1,o2) {
    const isValid = o1+o2
    const isInt = Number.isInteger(isValid)
    if(!isInt || o1*o2 < 0){
        return "ERROR"
    }
    const half_count = (Math.abs(o1-o2)+1)/2
    const sum_minmax = o1+o2
    return half_count * sum_minmax
};

// Do not edit below this line
module.exports = sumAll;
