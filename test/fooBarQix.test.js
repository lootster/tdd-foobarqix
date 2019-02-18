const FooBarQix = require("../src/FooBarQix");

test("should return 1 if input is 1", () => {
  let bot = new FooBarQix();
  let message = bot.testNumber(1);
  expect(message).toBe(1);
});

test('should return "FooFoo" if the number is divisible by 3 or contains 3', () => {
  let bot = new FooBarQix();
  let message = bot.testNumber(3);
  expect(message).toBe("FooFoo");
});

test('should return "Bar" if the number is divisible by 5 or contains 5', () => {
  let bot = new FooBarQix();
  let message = bot.testNumber(5);
  expect(message).toBe("BarBar");
});

test('should return "Qix" if the number is divisible by 7 or contains 7', () => {
  let bot = new FooBarQix();
  let message = bot.testNumber(7);
  expect(message).toBe("QixQix");
});

test('should return "FooBar" if the number is 51', () => {
  let bot = new FooBarQix();
  let message = bot.testNumber(51);
  expect(message).toBe("FooBar");
});

test('should return "BarFoo" if the number is 53', () => {
  let bot = new FooBarQix();
  let message = bot.testNumber(53);
  expect(message).toBe("BarFoo");
});

test('should return "FooQix" if the number is 21', () => {
  let bot = new FooBarQix();
  let message = bot.testNumber(21);
  expect(message).toBe("FooQix");
});

test('should return "Foo" if the number is 13', () => {
  let bot = new FooBarQix();
  let message = bot.testNumber(13);
  expect(message).toBe("Foo");
});

test('should return "FooBarBar" if the number is 15', () => {
  let bot = new FooBarQix();
  let message = bot.testNumber(15);
  expect(message).toBe("FooBarBar");
});

test('should return "FooFooFoo" if the number is 33', () => {
  let bot = new FooBarQix();
  let message = bot.testNumber(33);
  expect(message).toBe("FooFooFoo");
});

test('should return "Foo" if the number is 9', () => {
  let bot = new FooBarQix();
  let message = bot.testNumber(9);
  expect(message).toBe("Foo");
});

test('should return "Bar" if the number is 10', () => {
  let bot = new FooBarQix();
  let message = bot.testNumber(10);
  expect(message).toBe("Bar");
});
