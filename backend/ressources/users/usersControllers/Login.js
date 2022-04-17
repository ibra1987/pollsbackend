const User = require("../../../models/User");
const { loginValidator } = require("../usersValidator");

const Login = async (req, res) => {
  const { email, password } = req.body;
};

module.exports = Login;
