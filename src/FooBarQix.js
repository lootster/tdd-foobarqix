const MESSAGE_FOO = "Foo";
const MESSAGE_BAR = "Bar";
const MESSAGE_QIX = "Qix";
const THREE = 3;
const FIVE = 5;
const SEVEN = 7;

class FooBarQix {
  constructor() {
    this.array = [];
    this.array[THREE] = MESSAGE_FOO;
    this.array[FIVE] = MESSAGE_BAR;
    this.array[SEVEN] = MESSAGE_QIX;
  }

  testNumber(number) {
    let string = "";
    let numberToString = number.toString();

    Object.keys(this.array).forEach(key => {
      if (isDivisibleBy(number, key)) string += this.array[key];
    });

    if (numberToString.length > 1) {
      return containFooBarQiz(numberToString, string);
    }
    return string ? string : number;
  }
}

module.exports = FooBarQix;

function containFooBarQiz(numberToString, string) {

  for (let i = 0; i < numberToString.length; i++) {
    if (numberToString.charAt(i).includes(THREE.toString())) {
      string += MESSAGE_FOO;
    }
    if (numberToString.charAt(i).includes(FIVE.toString())) {
      string += MESSAGE_BAR;
    }
    if (numberToString.charAt(i).includes(SEVEN.toString())) {
      string += MESSAGE_QIX;
    }
  }
  
  return string;
}

function isDivisibleBy(number, denominator) {
  return number % denominator === 0;
}
