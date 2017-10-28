var routes = require('./routes');
var book = require('./routes/book');

module.exports = function(app) {
    app.get('/', routes.index);
    app.get('/book/:id', book.list);
}