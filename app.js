let currentEnv = process.env.NODE_ENV;

if (currentEnv === '' || (currentEnv !== 'test' && currentEnv !== 'development' && currentEnv !== 'production')) {
    console.log("not found NODE_ENV environment variable to start application.!!! (test, development, production)");
    process.exit();
}

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var versionRouter = require('./controllers/version');
var signin = require('./controllers/signin');
var ballot = require('./controllers/ballot');
var app = express();
var authentication = require('./middlewares/authentication')
var permission = require('./middlewares/permission')

require('./utilities/prototype').prototype()
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    next();
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/version', versionRouter.router);
app.use('/signin', signin.router)
app.use('/ballot', authentication,permission(['voter', 'candidate']), ballot.router)
module.exports = app;
