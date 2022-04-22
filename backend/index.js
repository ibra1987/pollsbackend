const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const DBConnect = require("./config/DBConnection");
dotenv.config();

// importing routes

const usersRoutes = require("./ressources/users/usersRoutes");

const app = express();
app.use(cookieParser());
const port = process.env.PORT || 5500;

//middlewares
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
const whitelist = ["http://localhost:3000" /** other domains if any */];
const corsOptions = {
  credentials: true,
  origin: "*",
};

app.use(cors(corsOptions));

//routes

app.use("/api/users", usersRoutes);

app.listen(port, () => {
  console.log(`server started at posrt ${port}`);
});

DBConnect();
