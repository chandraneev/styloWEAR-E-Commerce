const { body } = require("express-validator");

exports.Registervalidator = [
  body("firstname")
    .notEmpty()
    .withMessage("Firstname is required"),

  body("lastname")
    .notEmpty()
    .withMessage("Lastname is required"),

  body("phoneno")
    .notEmpty()
    .withMessage("Phone NO. is required")
    .isLength({ min: 10 })
    .withMessage("Phone NO. must 10 numbers"),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),

  body("address")
    .notEmpty()
    .withMessage("Address is required"),

  body("landmark")
    .notEmpty()
    .withMessage("Landmark is required"),

  body("pincode")
    .notEmpty()
    .withMessage("Pincode is required"),

  body("citystate")
    .notEmpty()
    .withMessage("City, state is required"),
     
  body("gender")
    .notEmpty()
    .withMessage("Gender is required"),
];
