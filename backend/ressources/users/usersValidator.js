const { check } = require("express-validator");

exports.registerValidator = [
  check("fullName", "Please provide your name or your organization name")
    .exists()
    .notEmpty(),
  check("email", "Please enter a valid email address").isEmail(),
  check("emailConfirmation", "emails do not match")
    .exists()
    .isEmail()
    .custom((value, { req }) => {
      return value === req.body.email;
    }),
  check("password", "Password must be at leat 8 characters long").isLength({
    min: 8,
  }),
  check("passwordConfirmation", "Passwords must be identical")
    .exists()
    .isLength({ min: 8 })
    .custom((value, { req }) => {
      return value === req.body.password;
    }),
];

exports.loginValidator = [
  check("email", "Please enter a valid email address").isEmail(),

  check("password", "Password must be at leat 8 characters long").isLength({
    min: 8,
  }),
];
