const MESSAGE_FOO = "Foo";
const MESSAGE_BAR = "Bar";
const MESSAGE_QIX = "Qix";
const THREE = 3;
const FIVE = 5;
const SEVEN = 7;

class FooBarQix {
  testNumber(number) {
    let output = "";
    let numberToString = number.toString();

    if (isDivisibleBy3(number)) output += MESSAGE_FOO;
    if (isDivisibleBy5(number)) output += MESSAGE_BAR;
    if (isDivisibleBy7(number)) output += MESSAGE_QIX;
    if (numberToString.length > 1) {
      return containFooBarQiz(numberToString, output);
    }
    return output ? output : number;
  }
}

module.exports = FooBarQix;

function containFooBarQiz(numberToString, output) {
  for (let i = 0; i < numberToString.length; i++) {
    if (numberToString.charAt(i).includes(THREE.toString())) {
      output += MESSAGE_FOO;
    }
    if (numberToString.charAt(i).includes(FIVE.toString())) {
      output += MESSAGE_BAR;
    }
    if (numberToString.charAt(i).includes(SEVEN.toString())) {
      output += MESSAGE_QIX;
    }
  }
  return output;
}

function isDivisibleBy3(number) {
  return number % THREE === 0;
}

function isDivisibleBy5(number) {
  return number % FIVE === 0;
}

function isDivisibleBy7(number) {
  return number % SEVEN === 0;
}
