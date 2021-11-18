"use strict";
const functions = {
  isOdd: function isOddFaster(num) {
    //Data sanitization goes Brrr....
    //remove negative sign from the number
    const number = Math.abs(num);
    //if not number
    if (!typeof number === "Number") {
      throw new TypeError("isOdd requires a number to check.");
    }
    if (!Number.isInteger(number)) {
      throw new Error("isOdd requires an integer to chek.");
    }
    if (!Number.isSafeInteger(number)) {
      throw new Error("value exceeds maximum safe integer");
    }
    return Boolean(number & 1);
  },
};
module.exports = functions;
