const convertToCelsius = function(farenheit) {
  let rounded = parseFloat(Math.round((5/9).toFixed(4)*10000)/10000)
  return parseFloat(((farenheit-32)*rounded).toFixed(1))
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
