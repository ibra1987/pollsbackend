const User = require("../../../models/User");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const privateKey = process.env.JWT_SECRET;

//create new user

const Register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullName, email, password } = req.body;

  try {
    const user = await User.countDocuments({ email });

    if (user > 0) {
      console.log(user);
      return res.status(400).json({
        errors: [
          {
            msg: "This email is already in use",
          },
        ],
      });
    }

    const saltRounds = 10;

    bcrypt.hash(password, saltRounds, async (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({
          errors: [
            {
              msg: "An error occured please try again ",
            },
          ],
        });
      }
      const newUser = new User({ fullName, email, password: hashedPassword });
      await newUser.save();

      const token = jwt.sign({ _id: newUser._id }, privateKey);

      res.cookie("access", token, {
        httpOnly: true,
        maxAge: 60 * 1000,
      });

      res.status(201).json({
        success: [
          {
            msg: "New account created successfully",
          },
        ],
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

module.exports = Register;
