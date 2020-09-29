module.exports = {
  fizzBuzzImpl: function (num) {
    if (num === null) {
      return "null";
    }

    if (num % 15 === 0) {
      return "FizzBuzz";
    }

    if (num % 3 === 0) {
      return "Fizz";
    }

    if (num % 5 === 0) {
      return "Buzz";
    }

    return num + "";
  },
};
