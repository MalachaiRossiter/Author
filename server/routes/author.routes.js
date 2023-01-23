const AuthorController = require('../controllers/author.controller');


module.exports = (app) => {
    app.get('/api/author', AuthorController.getAllAuthors);
    app.get('/api/author/:id', AuthorController.getAuthor);
    app.put('/api/author/:id', AuthorController.updateAuthor);
    app.post('/api/author', AuthorController.updateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
}