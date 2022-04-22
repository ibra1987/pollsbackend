const User = require("../../../models/User");

const setNewPassword = async (req, res) => {
  const { password, passwordConfirmation } = req.body;

  if (!password || !passwordConfirmation) {
    return res.status(400).json({
      errors: [
        {
          msg: "Please fill in all fields",
        },
      ],
    });
  }
};

module.exports = setNewPassword;
