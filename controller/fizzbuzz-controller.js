const fizzBuzzService = require("../service/fizzbuzz");

const controller = {
  checkNumber: function (req, res) {
    fizzBuzzService.checkFizzBuzzNumber(req, res, function (
      err,
      fizzBuzzObject
    ) {
      if (err) {
        res.send(err);
      }
      res.json(fizzBuzzObject);
    });
  },
};

module.exports = controller;
