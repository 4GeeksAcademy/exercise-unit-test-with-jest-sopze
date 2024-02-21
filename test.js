// re-define this here as if we were the teacher with the correct values
const oneEuroIs = {
  "JPY": 156.5, // japan yen
  "USD": 1.07, // us dollar
  "GBP": 0.87, // british pound
}

test("One dollar should be 146.26 yen", function() {
    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(3.5);
    const expected = 3.5 / oneEuroIs.USD * oneEuroIs.JPY; 
    
     expect(fromDollarToYen(3.5)).toBe(expected); 
})

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * oneEuroIs.USD;
    
     expect(fromEuroToDollar(3.5)).toBe(expected); 
})

test("One yen should be .005559 pounds", function() {
    const { fromYenToPound } = require('./app.js');

    const pounds = fromYenToPound(3500);
    const expected = 3500 / oneEuroIs.JPY * oneEuroIs.GBP;
    
     expect(fromYenToPound(3500)).toBe(expected); 
})