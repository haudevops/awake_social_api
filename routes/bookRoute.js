const bookController = require("../controllers/bookController");

const route = require("express").Router();

//Add Book
route.post("/", bookController.addBook);

//Get All Book
route.get("/", bookController.getAllBook);

//Get A Book
route.get("/:id", bookController.getABook);

//Uppate A Book
route.put("/:id", bookController.updateBook);

//Deleta A Book
route.delete("/:id", bookController.deleteBook);

module.exports = route;