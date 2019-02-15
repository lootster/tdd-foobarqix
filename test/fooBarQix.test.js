const FooBarQix = require("../src/FooBarQix");

test("should return 1 if input is 1", () => {
  let bot = new FooBarQix();
  let message = bot.testNumber(1);
  expect(message).toBe(1);
});

test('should return "Foo" if the number is divisible by 3', () => {
  let bot = new FooBarQix();
  let message = bot.testNumber(3);
  expect(message).toBe("Foo");
});

test('should return "Bar" if the number is divisible by 5', () => {
  let bot = new FooBarQix();
  let message = bot.testNumber(5);
  expect(message).toBe("Bar");
});

test('should return "Qix" if the number is divisible by 7', () => {
  let bot = new FooBarQix();
  let message = bot.testNumber(7);
  expect(message).toBe("Qix");
});
