
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var errorHandler = require('errorhandler');
var logger = require('morgan')

// This should refer to the local React and gets installed via `npm install` in
// the example.
var reactViews = require('express-react-views');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'static')));

// development only
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

app.locals.something = 'value';
app.locals.qaz = 'qut';

require('./route')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
