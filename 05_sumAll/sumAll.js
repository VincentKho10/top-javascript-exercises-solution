const sumAll = function(o1,o2) {
    const half_count = (Math.abs(o1-o2)+1)/2
    const sum_minmax = o1+o2
    return half_count * sum_minmax
};

// Do not edit below this line
module.exports = sumAll;
