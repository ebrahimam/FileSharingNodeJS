const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const DBConnection = async () => {
  const MONGODB_URI = "mongodb://localhost:27017/test";
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
    console.log("DataBase Connected.");
  } catch (error) {
    console.error("Error With Connecting with database.");
  }
};

module.exports = DBConnection;
