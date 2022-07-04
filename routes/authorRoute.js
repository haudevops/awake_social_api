const authorController = require("../controllers/authorController");

const route = require("express").Router();

//Add Author
route.post("/", authorController.addAuthor);

//Get All Author
route.get("/", authorController.getAllAuthor);

module.exports = route;