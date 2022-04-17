const router = require("express").Router();
const { Register } = require("../users/usersControllers");
const Login = require("./usersControllers/Login");
const { registerValidator, loginValidator } = require("./usersValidator");

//@Post => create a new user
router.post("/register", registerValidator, Register);

//@get => Login user
router.get("/login", loginValidator, Login);

module.exports = router;
