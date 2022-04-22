const User = require("../../../models/User");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const privateKey = process.env.JWT_SECRET;

const Login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    //if no user found
    if (!user) {
      return res.status(404).json({
        errors: [
          {
            msg: "There is no user with this email",
          },
        ],
      });
    }

    // if there is a user

    const isCorrectPass = await bcrypt.compare(password, user.password);

    if (!isCorrectPass) {
      //User.updateOne({ email }, { $inc: { loginFails: 1 } });

      user.loginFails++;
      await user.save();
      return res.status(400).json({
        errors: [
          {
            msg: "Incorrect Password",
            loginFails: user?.loginFails,
            warning:
              parseInt(user?.loginFails) > 5
                ? "Too many attempts. Confirm your email address to set up a new passwod"
                : "Please note that you only have 5 attempts allowed in total",
          },
        ],
      });
    }

    const token = jwt.sign({ _id: user._id }, privateKey);

    user.accessToken = token;
    await user.save();

    res.cookie("access", token, {
      httpOnly: true,
      maxAge: 60 * 1000 * 60,
    });
    res.cookie("second", "user", {
      httpOnly: true,
      maxAge: 60 * 1000 * 60,
    });

    res.status(200).json({
      success: [
        {
          msg: "successfully loged in",
        },
      ],
    });
  } catch (error) {}
};

module.exports = Login;
