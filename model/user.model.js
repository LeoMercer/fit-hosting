const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  Email: String,
  Password: String,
  ConfirmPassword: String,
});
const user = new mongoose.model("user", userSchema);
module.exports = user;
