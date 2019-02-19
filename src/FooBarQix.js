const MESSAGE_FOO = "Foo";
const MESSAGE_BAR = "Bar";
const MESSAGE_QIX = "Qix";
const FOO_VALUE = 3;
const BAR_VALUE = 5;
const QIX_VALUE = 7;

class FooBarQix {
  constructor() {
    this.fooBarQixArray = [];
    this.fooBarQixArray[FOO_VALUE] = MESSAGE_FOO;
    this.fooBarQixArray[BAR_VALUE] = MESSAGE_BAR;
    this.fooBarQixArray[QIX_VALUE] = MESSAGE_QIX;
  }

  testNumber(number) {
    let result = "";
    let numberRepresentInString = number.toString();

    result += this.checkForDivisibility(number);
    result += this.checkForOccurence(numberRepresentInString);

    return formatResult(result, number);
  }

  checkForDivisibility(number) {
    let result = "";

    this.browseArray(key => {
      if (isDivisibleBy(number, key)) result += this.getValue(key);
    });

    return result;
  }

  checkForOccurence(numberToString) {
    let result = "";

    for (let i = 0; i < numberToString.length; i++) {
      this.browseArray(key => {
        if (contains(numberToString, key, i)) result += this.getValue(key);
      });
    }

    return result;
  }

  browseArray(callback) {
    return Object.keys(this.fooBarQixArray).forEach(callback);
  }

  getValue(key) {
    return this.fooBarQixArray[key];
  }
}

module.exports = FooBarQix;

function formatResult(string, number) {
  return string ? string : number;
}

function isDivisibleBy(number, denominator) {
  return number % denominator === 0;
}

function contains(string, element, index) {
  return string.charAt(index).includes(element);
}
