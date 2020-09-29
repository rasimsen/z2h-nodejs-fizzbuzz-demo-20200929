const fizzBuzzHelper = require("./fizzbuzz-helper");

module.exports = {
  checkFizzBuzzNumber: function (req, res, next) {
    const num = req.params.number;
    res.send({
      number: num,
      result: fizzBuzzHelper.fizzBuzzImpl(num),
    });
  },
};
