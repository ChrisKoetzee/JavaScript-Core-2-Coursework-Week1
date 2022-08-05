/*
  Objects can be thought of as key/value storage, like a dictionary or a 'lookup'.

  You have a variable called COUNTRY_CURRENCY_CODES which is an array of arrays.
  Each inner array contains a country code and its currency code.

  Write a function called createLookup that
    - takes COUNTRY_CURRENCY_CODES as an argument (remember, it's an array of arrays)
    - returns a new object where the keys are the country codes and the values are the currency codes
    Hint: you'll need to use bracket notation to add new key/value pairs to the object
*/

const COUNTRY_CURRENCY_CODES = [
  ["GB", "GBP"],
  ["DE", "EUR"],
  ["NG", "NGN"],
  ["MX", "MXN"],
];

function createLookup(COUNTRY_CURRENCY_CODES) {
  let countryCurrencyCodes = COUNTRY_CURRENCY_CODES
  return countryCurrencyCodes.slice((0, 2));
  

    // function createLookup(countryCurrencyCodes) {
    //   let  COUNTRY_CURRENCY_CODES = countryCurrencyCodes;
    //   let result  = [];
    //   while (countryCurrencyCodes == COUNTRY_CURRENCY_CODES) {
    //     result = countryCurrencyCodes.index[0, "1"];
    //     countryCurrencyCodes = Object.getPrototypeOf(countryCurrencyCodes);    
    // result = countryCurrencyCodes.index[ `${index(0), index("1")}`];
    // result = countryCurrencyCodes.index[{COUNTRY_CURRENCY_CODES.index(0) : index("1")}];
    // result = countryCurrencyCodes.index[0, 1, 2 ,3 [1, 0]];
  // }
  // return result;
  // must come back
  // write code here
}

/* ======= TESTS - DO NOT MODIFY =====
- To run the tests for this exercise, run `npm test -- --testPathPattern 2-currency-code-lookup.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("creates country currency code lookup", () => {
  expect(createLookup(COUNTRY_CURRENCY_CODES)).toEqual({
    GB: "GBP",
    DE: "EUR",
    NG: "NGN",
    MX: "MXN",
  });
});