const {Author, Book} = require("../model/model");

const authorController = {
    //Add Author
    addAuthor: async(req, res) => {
        try{
            const newAuthor = new Author(req.body);
            const saveAuthor = await newAuthor.save();
            res.status(200).json(savedBook);
        }catch(e){
            res.status(500).json(e);
        }
    },

    //Get All Author
    getAllAuthor: async(req, res) => {
        try{
            const authors = await Author.find();
            res.status(200).json(authors);
        }catch(e){
            res.status(500).json(e);
        }
    }
}

module.exports = authorController;