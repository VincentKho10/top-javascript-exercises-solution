const repeatString = function(word, repeat_by) {
    if (repeat_by>=0){
        return word.repeat(repeat_by)
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
