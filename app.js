
// i guess im not supposed to add new cenversion values here and only use these three, right?
const oneEuroIs = {
  "JPY": 156.5, // japan yen
  "USD": 1.07, // us dollar
  "GBP": 0.87, // british pound
}

const fromDollarToYen = function(valueInDollar) {
  // Convert USD to EUR then EUR to JPY
  return valueInDollar / oneEuroIs.USD * oneEuroIs.JPY;
}

const fromEuroToDollar = function(valueInEuro) {
  // Convert EUR to USD
  return valueInEuro * oneEuroIs.USD;
}

const fromYenToPound = function(valueInYen) {
  // Convert JPY to EUR then EUR to GBP
  return valueInYen / oneEuroIs.JPY * oneEuroIs.GBP;
}

// This is my function that sums two numbers
const sum = (a,b) => {
  return a + b
}

module.exports = { sum, oneEuroIs, fromDollarToYen, fromEuroToDollar, fromYenToPound };
