const removeFromArray = function(arr, ...tofind) {
    const temparr = [...new Set(arr)]
    tofind.forEach((tf)=>{
        const del_index = temparr.findIndex((v)=>v===tf);
        if(del_index!==-1){
            temparr.splice(del_index,1)
        }
    })
    return temparr;
};

// Do not edit below this line
module.exports = removeFromArray;
