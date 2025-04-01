const convertToCelsius = function(temperature) {
  let ans = parseFloat(((temperature - 32) * 5 / 9).toFixed(1));
  return ans;
};

const convertToFahrenheit = function(temperature) {
  let ans = parseFloat((temperature * 9 / 5 + 32).toFixed(1));
  return ans;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
