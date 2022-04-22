const PassToken = require("../../../models/PassToken");
const User = require("../../../models/User");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const privatekey = process.env.JWT_SECRET;

const resetPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      errors: [
        {
          msg: "Please enter your email address",
        },
      ],
    });
  }
  // get the uset
  const user = await User.findOne({ email });

  //user does not exist
  if (!user) {
    return res.status(400).json({
      errors: [
        {
          msg: "This is email address is not related to any account",
        },
      ],
    });
  }

  //create a pass reset token

  const token = jwt.sign({ id: user._id }, privatekey, {
    expiresIn: 60 * 60 * 1000,
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "brahim.driouch1987@gmail.com",
      pass: "vxjszhjasomjxpnn",
    },
  });

  const options = {
    from: "brahim.driouch1987@gmail.com",
    to: "ibrahim.logistics@gmail.com",
    subject: "first email from node app",
    html: `please follow this link <a href="http://localhost:3000/users/reset-password/${token}">reset password</a>`,
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        errors: [
          {
            msg: "An error occured, could not send the email",
          },
        ],
      });
    }

    res.status(200).json({
      success: [
        {
          msg: "An email has been to sent to your email address to reset your password",
        },
      ],
    });
  });
};

module.exports = resetPassword;
