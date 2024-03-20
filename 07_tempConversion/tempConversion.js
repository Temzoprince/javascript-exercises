const convertToCelsius = function(temperature) {
  return ((temperature - 32) * (9/5));
};

const convertToFahrenheit = function(temperature) {
  return (temperature * (9/5) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
