const convertToCelsius = function(farenheit) {
  return Math.round((farenheit - 32)*5/9*10)/10
};

const convertToFahrenheit = function(celcius) {
  let rounded = parseFloat(Math.round((9/5).toFixed(2)*100)/100)
  return parseFloat((celcius*rounded+32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
