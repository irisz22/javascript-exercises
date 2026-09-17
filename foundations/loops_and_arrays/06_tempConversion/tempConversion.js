const convertToCelsius = function(x) {
  let answer = (x - 32) * 5/9;
  return Math.round(answer * 10) / 10;
};

const convertToFahrenheit = function(x) {
  let answer = (x * 9/5) + 32;
  return Math.round(answer * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
