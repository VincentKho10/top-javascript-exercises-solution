const findTheOldest = function (arr_person) {
  const oldst = arr_person.reduce(
    (acc, curr) => {
      const curryod = curr.yearOfDeath
        ? curr.yearOfDeath
        : new Date().getFullYear();
      const currage = curryod - curr.yearOfBirth;
      const accyod = acc.yearOfDeath
        ? acc.yearOfDeath
        : new Date().getFullYear();
      const accage = accyod - acc.yearOfBirth;

      if (accage < currage) {
        return curr;
      }
      return acc;
    },
    { yearOfDeath: 1, yearOfBirth: 1 }
  );

  return arr_person.find((v) => {
    // console.log(v)
    return v === oldst;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
