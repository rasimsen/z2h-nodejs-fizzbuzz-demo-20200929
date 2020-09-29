const fizzBuzzHelper = require("./fizzbuzz-helper");

describe("FizzBuzz service test", () => {
  it("other options", () => {
    expect(fizzBuzzHelper.fizzBuzzImpl(null)).toBe("null");
    expect(fizzBuzzHelper.fizzBuzzImpl(32)).toBe("32");
    expect(fizzBuzzHelper.fizzBuzzImpl(32)).toBe("32");
  });

  it("fizz test", () => {
    expect(fizzBuzzHelper.fizzBuzzImpl(3)).toBe("Fizz");
    expect(fizzBuzzHelper.fizzBuzzImpl(33)).toBe("Fizz");
    expect(fizzBuzzHelper.fizzBuzzImpl(999)).toBe("Fizz");
  });

  it("Buzz test", () => {
    expect(fizzBuzzHelper.fizzBuzzImpl(5)).toBe("Buzz");
    expect(fizzBuzzHelper.fizzBuzzImpl(55)).toBe("Buzz");
    expect(fizzBuzzHelper.fizzBuzzImpl(100000)).toBe("Buzz");
  });

  it("FizzBuzz test", () => {
    expect(fizzBuzzHelper.fizzBuzzImpl(15)).toBe("FizzBuzz");
    expect(fizzBuzzHelper.fizzBuzzImpl(300)).toBe("FizzBuzz");
    expect(fizzBuzzHelper.fizzBuzzImpl(600000)).toBe("FizzBuzz");
  });
});

// RED - GREEN - BLUE
