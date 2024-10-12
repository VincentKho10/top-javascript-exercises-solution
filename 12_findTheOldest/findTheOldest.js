const getAge = function (birth, death = new Date().getFullYear()){
  return death-birth
}

const findTheOldest = function (arr_person) {
  return arr_person.reduce(
    (acc, curr) => {
      const {yearOfBirth: ayb, yearOfDeath: ayd} = acc
      const {yearOfBirth: cyb, yearOfDeath: cyd} = curr
      const acc_age = getAge(ayb, ayd)
      const curr_age = getAge(cyb, cyd)
      return acc_age > curr_age?acc:curr
    }
  );
};

// Do not edit below this line
module.exports = findTheOldest;
