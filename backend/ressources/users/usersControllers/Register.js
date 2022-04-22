const User = require("../../../models/User");
const { validationResult } = require("express-validator");
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
    // if user already exists
    if (user > 0) {
      return res.status(400).json({
        errors: [
          {
            msg: "This email is already in use",
          },
        ],
      });
    }

    const saltRounds = 10;

    //hash the pqssword
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

      //generate a token and send it to cookies
      const token = jwt.sign({ _id: newUser._id }, privateKey);

      newUser.accessToken = token;
      await newUser.save();

      res.cookie("access", token, {
        httpOnly: true,
        maxAge: 60 * 1000 * 60,
      });

      res.status(201).json({
        success: [
          {
            msg: "Account created successfully, you can now log in",
            warning: "A verification link has been sent to your email account",
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
