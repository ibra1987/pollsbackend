const router = require("express").Router();
const {
  Register,
  Login,
  resetPassword,
  checkResetPassLink,
  setNewPassword,
} = require("../users/usersControllers");

const { registerValidator, loginValidator } = require("./usersValidator");

//@Post => create a new user
router.post("/register", registerValidator, Register);

//@Post => Login user
router.post("/login", loginValidator, Login);

//@Post =>reset password

router.post("/resetpassword", resetPassword);

//@get check pass reset link and token
router.get("/resetpassword/:reset_token", checkResetPassLink);

//@post set new passsword

router.post("/setnewpassword", setNewPassword);

module.exports = router;
