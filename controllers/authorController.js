const {Author, Book} = require("../model/model");

const authorController = {
    //Add Author
    addAuthor: async(req, res) => {
        try{
            const newAuthor = new Author(req.body);
            const saveAuthor = await newAuthor.save();
            res.status(200).json(saveAuthor);
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
    },

    getAnAuthor: async(req, res) => {
        try{
            const author = await Author.findById(req.params.id).populate("books");
            res.status(200).json(author);
        }catch(e){
            res.status(500).json(e);
        }
    },

    //Update Author
    updateAuthor: async (req, res) => {
        try {
            const author = await Author.findById(req.params.id);
            await author.updateOne({ $set: req.body });
            res.status(200).json("Update successfully!");
        } catch (e) {
            res.status(500).json(e);
        }
    },

    deleteAuthor: async(req, res) => {
        try{
            await Book.updateMany({author: req.params.id}, {author: null});
            await Author.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted successfully!");
        }catch(e){
            res.status(500).json(e);
        }
    }
}

module.exports = authorController;