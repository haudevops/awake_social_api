const {Author, Book} = require("../model/model");

const bookController = {
    //Add Book
    addBook: async(req, res) => {
        try{
            const newBook = new Book(req.body);
            const savedBook = await newBook.save();
            if(res.body.author){
                const author = Author.findById(req.body.author);
                author.updateOne({$push: {
                    books: savedBook._id
                }});
            }
            res.status(200).json(savedBook);
        }catch(e){
            res.status(500).json(e);
        }
    },

    //Get All Author
    getAllBook: async(req, res) => {
        try{
            const books = await Book.find();
            res.status(200).json(books);
        }catch(e){
            res.status(500).json(e);
        }
    }

};

module.exports = bookController;