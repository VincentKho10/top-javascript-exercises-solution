const palindromes = function (text) {
    const sanitized_text = text.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
    console.log(sanitized_text)
    const length = sanitized_text.length
    const repeat = Math.floor(length/2)
    for(let i=0; i<repeat;i++){
        if(sanitized_text[i]!=sanitized_text[length-i-1]){
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
