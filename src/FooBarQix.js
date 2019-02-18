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
      if (numberToString.charAt(0).includes(key)) string += this.array[key];
    });

    if (numberToString.length > 1) {
      return this.containThreeFiveSeven(numberToString, string);
    }
    return string ? string : number;
  }

  containThreeFiveSeven(numberToString, string) {
    for (let i = 1; i < numberToString.length; i++) {
      Object.keys(this.array).forEach(key => {
        if (numberToString.charAt(i).includes(key)) string += this.array[key];
      });
    }
    return string;
  }
}

module.exports = FooBarQix;

function isDivisibleBy(number, denominator) {
  return number % denominator === 0;
}
