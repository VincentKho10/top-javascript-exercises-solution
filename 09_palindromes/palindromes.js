const palindromes = function (text) {
    const lastidx = text.length-1
    const iter = Math.floor(text.length/2)
    const sanitized = text.replace(' ','')
    for(let i=0; i<iter; i++){
        console.log(sanitized[i])
        console.log(sanitized[lastidx-i])
        if(sanitized[i]!=sanitized[lastidx-i]){
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
