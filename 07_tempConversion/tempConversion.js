const convertToCelsius = function(temperature) {
  let tempCel = ((temperature - 32) * (5/9));
  return Math.round(tempCel * 10) / 10
};

const convertToFahrenheit = function(temperature) {
  return (temperature * (9/5) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
