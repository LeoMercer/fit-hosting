require("./model/db");
require("./model/user.model");

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const users = require("./model/user.model");
const app = express();
// const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
// app.use(cors());
app.use(
  session({
    secret: "abcd",
    saveUninitialized: true,
    Cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false,
  })
);

app.listen(5000, () => {
  console.log("App listening at http://localhost:5000");
});

// Define routes for your EJS pages
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/activities", function (req, res) {
  res.render("activities.ejs");
});

app.get("/diet", function (req, res) {
  res.render("diet.ejs");
});

app.get("/tracker", function (req, res) {
  res.render("tracker.ejs");
});

app.get("/watertracker", function (req, res) {
  res.render("watertracker.ejs");
});
app.get("/weight", function (req, res) {
  res.render("weight.ejs");
});
app.get("/calorie", function (req, res) {
  res.render("calorie.ejs");
});
app.get("/registration", function (req, res) {
  res.render("registration.ejs");
});

app.get("/login", function (req, res) {
  res.render("login.ejs");
});
app.get("/profile", function (req, res) {
  res.render("profile.ejs");
});
app.get("/index2", function (req, res) {
  res.render("index2.ejs");
});
app.post("/save", (req, res) => {
  const user = new users(req.body);
  user
    .save()
    .then(() => {
      res.render("login.ejs");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/login", (req, res) => {
  var email = req.body.email;
  //var password=req.body.password;
  var data = users
    .find({ Email: email })
    //users.find({Password:password})
    .then((data) => {
      res.render("index2.ejs", { data: data });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/api/user", async (req, res) => {
  try {
    const user = await user.find();
    res.json(user);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

app.get("/profile", (req, res) => {
  // console.log("Hello")
  var email = req.session.email;
  console.log(email);
  Register.find({ Email: email })
    .then((data) => {
      console.log(data);
      res.render("profile", { data: data[0] });
    })
    .catch((err) => {
      console.log(err);
    });
});
