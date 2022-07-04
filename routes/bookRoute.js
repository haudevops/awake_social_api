const bookController = require("../controllers/bookController");

const route = require("express").Router();

//Add Book
route.post("/", bookController.addBook);

//Get All Book
route.get("/", bookController.getAllBook);