const reverseString = function(word) {
    const wl = [...word]
    res = wl.reduceRight((ac,cur) => ac+cur, '')
    return res
};

// Do not edit below this line
module.exports = reverseString;
