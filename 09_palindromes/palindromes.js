const palindromes = function (text) {
    let sanitized = text.replace(/[^a-zA-Z0-9]/g,'')
    sanitized = sanitized.toLowerCase()
    const lastidx = sanitized.length-1
    const iter = Math.floor(sanitized.length/2)
    console.log(sanitized)
    for(let i=0; i<iter; i++){
        if(sanitized[i]!=sanitized[lastidx-i]){
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
