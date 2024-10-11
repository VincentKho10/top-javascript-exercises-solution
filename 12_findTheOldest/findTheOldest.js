const findTheOldest = function(arr_person) {
    const oldst = arr_person.reduce((acc,curr)=>{
        const age = curr.yearOfDeath - curr.yearOfBirth
        if (acc<age){
            return age
        }
        return acc
    },0)
    return arr_person.find((v)=>{
        const age = v.yearOfDeath - v.yearOfBirth
        return age == oldst        
    })
};

// Do not edit below this line
module.exports = findTheOldest;
