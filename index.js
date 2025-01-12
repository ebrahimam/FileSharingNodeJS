const express = require("express");
const cors = require("cors");
const DBConnection = require("./database/db");
const router =require('./Routes/routes');

const app = express();
app.use(cors());

app.use("/",router)

const PORT = 8000;

DBConnection();

app.listen(PORT, () => {
  console.log("Server Running on port 8000.");
});
