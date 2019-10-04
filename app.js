let currentEnv = process.env.NODE_ENV;

if(currentEnv === '' || (currentEnv !== 'test' && currentEnv !== 'development' && currentEnv !== 'production')) {
console.log("not found NODE_ENV environment variable to start application.!!! (test, development, production)");
process.exit();
}

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')

var versionRouter = require('./routes/version');
var signin = require('./routes/signin');
var ballot = require('./routes/ballot');
var app = express();
require('./extendsion/prototype').prototype()
app.use((req, res, next) => {    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    next();
})

app.use(bodyParser)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/version', versionRouter.router);
app.use('/signin', signin.router)
app.use('/ballot', ballot.router)
module.exports = app;
