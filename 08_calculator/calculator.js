const add = function(o1,o2) {
	return o1+o2
};

const subtract = function(o1,o2) {
	return o1-o2
};

const sum = function(o) {
	return o.reduce((acc,curr)=>acc+curr,0)
};

const multiply = function(o1,o2) {
  return o1*o2
};

const power = function(o1,o2) {
	return Math.pow(o1,o2)
};

const factorial = function(o) {
	temp = o
  res=1
  while(temp>0){
    res*=temp
    temp-=1
  }
  return res
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
