const { Author, Book } = require("../model/model");

const bookController = {
    //Add Book
    addBook: async (req, res) => {
        try {
            const newBook = new Book(req.body);
            const savedBook = await newBook.save();
            if (res.body.author) {
                const author = Author.findById(req.body.author);
                author.updateOne({
                    $push: {
                        books: savedBook._id
                    }
                });
            }
            res.status(200).json(savedBook);
        } catch (e) {
            res.status(500).json(e);
        }
    },

    //Get All Author
    getAllBook: async (req, res) => {
        try {
            const books = await Book.find();
            res.status(200).json(books);
        } catch (e) {
            res.status(500).json(e);
        }
    },

    //Get A Book
    getABook: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id).populate("author");
            res.status(200).json(book);
        } catch (e) {
            res.status(500).json(e);
        }
    },

    //Update Book
    updateBook: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            await book.updateOne({ $set: req.body });
            res.status(200).json("Update successfully!");
        } catch (e) {
            res.status(500).json(e);
        }
    },

    //Delete Book
    deleteBook: async(req, res) => {
        try{
            await Author.updateMany({books: req.params.id}, {$pull: {books: req.params.id}});
            await Book.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted successfully!");
        }catch(e){
            res.status(500).json(e);
        }
    }

};

module.exports = bookController;