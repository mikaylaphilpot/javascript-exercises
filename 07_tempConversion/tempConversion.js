const convertToCelsius = function(fahrenheitTemp) {
  let celsiusTemp = parseFloat(((fahrenheitTemp-32)*(5/9)).toFixed(1));
  return celsiusTemp;
};

const convertToFahrenheit = function(celsiusTemp) {
  let fahrenheitTemp = parseFloat((((9/5)*celsiusTemp)+32).toFixed(1));
  return fahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
