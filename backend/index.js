const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const DBConnect = require("./config/DBConnection");
dotenv.config();

// importing routes

const usersRoutes = require("./ressources/users/usersRoutes");

const app = express();
const port = process.env.PORT || 5500;

//middlewares

app.use(cors());
app.use(express.json());

//routes

app.use("/api/users", usersRoutes);

app.listen(port, () => {
  console.log(`server started at posrt ${port}`);
});

DBConnect();
