const privatekey = process.env.JWT_SECRET;
const User = require("../../../models/User");
const jwt = require("jsonwebtoken");
const checkResetPassLink = async (req, res) => {
  // if the link is comming from the email verification
  const { reset_token } = req.params;
  //verify the token
  if (!reset_token) {
    return res.status(400).json({
      errors: [
        {
          msg: "Invalid Link",
          value: false,
        },
      ],
    });
  }
  try {
    const { id } = jwt.verify(reset_token, privatekey);
    const passResetUser = await User.findOne({ _id: id });
    if (passResetUser) {
      const newToken = jwt.sign({ id }, privatekey);

      return res
        .status(200)
        .cookie("resetToken", newToken, {
          httpOnly: true,
          maxAge: 60 * 1000 * 60,
        })
        .json({
          success: [
            {
              msg: "Please reset your password",
              value: true,
            },
          ],
        });
    }
  } catch (error) {
    return res.status(400).json({
      errors: [
        {
          msg: "invalid Link ",
          value: false,
        },
      ],
    });
  }
};

module.exports = checkResetPassLink;
