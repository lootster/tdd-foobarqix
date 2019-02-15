const MESSAGE_FOO = "Foo";
const MESSAGE_BAR = "Bar";
const MESSAGE_QIX = "Qix";

class FooBarQix {
  testNumber(number) {
    if (number % 3 === 0 || number === 3) return MESSAGE_FOO;
    if (number % 5 === 0 || number === 5) return MESSAGE_BAR;
    if (number % 7 === 0 || number === 7) return MESSAGE_QIX;
    return number;
  }
}

module.exports = FooBarQix;
