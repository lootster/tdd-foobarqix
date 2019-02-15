const FooBarQix = require("../src/FooBarQix");

test("should return 1 if input is 1", () => {
  let bot = new FooBarQix();
  let message = bot.testNumber(1);
  expect(message).toBe(1);
});

test('should return "foo" if the number is divisible by 3', () => {
  let bot = new FooBarQix();
  let message = bot.testNumber(3);
  expect(message).toBe("Foo");
});
