const fizzBuzzControler = require("./fizzbuzz-controller");

module.exports = function (app) {
  app
    .route("/fizzbuzz/check-number/:number")
    .get(fizzBuzzControler.checkNumber);
};

/**
 *
 * server
 *
 * route
 *
 * controller
 *
 * service
 *
 *
 */
