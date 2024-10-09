const removeFromArray = function(list, find) {
    const arr = [...new Set(list)]
    console.log(find)
    const del_index = arr.findIndex((v,i)=>v!=find);
    console.log(arr.splice(del_index,1))
    return arr.splice(del_index,1);
};

// Do not edit below this line
module.exports = removeFromArray;
