const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.MONGODB_URL, () =>{
    console.log("Connected to DB");
});

app.listen(2311, () => {
    console.log("Server is running...");
});