const removeFromArray = function(tosearcharr, ...tofind) {
    const arr = [...new Set(tosearcharr)]
    tofind.forEach((v)=>{
        console.log(v)
        const del_index = arr.findIndex((vi)=>vi===v);
        if(del_index>=0){
            arr.splice(del_index,1)
        }
    })
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
