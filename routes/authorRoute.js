const authorController = require("../controllers/authorController");

const route = require("express").Router();

//Add Author
route.post("/", authorController.addAuthor);

//Get All Author
route.get("/", authorController.getAllAuthor);

//Get An Author
route.get("/:id", authorController.getAnAuthor);

//Update Author
route.put("/:id", authorController.updateAuthor);

//Delete Author
route.delete("/:id", authorController.deleteAuthor);

module.exports = route;