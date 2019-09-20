let currentEnv = process.env.NODE_ENV;

if(currentEnv === '' || (currentEnv !== 'test' && currentEnv !== 'development' && currentEnv !== 'production')) {
console.log("not found NODE_ENV environment variable to start application.!!! (test, development, production)");
process.exit();
}

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var versionRouter = require('./routes/version');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/version', versionRouter.router);

module.exports = app;
