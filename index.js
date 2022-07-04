const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRoute = require("./routes/authorRoute");
const bookRoute = require("./routes/bookRoute");

dotenv.config();
mongoose.connect(process.env.MONGODB_URL, () =>{
    console.log("Connected to DB");
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);

app.listen(2311, () => {
    console.log("Server is running...");
});