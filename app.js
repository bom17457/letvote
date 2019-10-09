let currentEnv = process.env.NODE_ENV;

if (currentEnv === '' || (currentEnv !== 'test' && currentEnv !== 'development' && currentEnv !== 'production')) {
    console.log("not found NODE_ENV environment variable to start application.!!! (test, development, production)");
    process.exit();
}

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var versionRouter = require('./controllers/version');
var signin = require('./controllers/signin');
var signout = require('./controllers/signout')
var ballot = require('./controllers/ballot');
var userproperties = require('./controllers/getUserProperties')
var manageElection = require('./controllers/manageElection')
var app = express();
var authentication = require('./middlewares/authentication')
var permission = require('./middlewares/permission')

require('./utilities/prototype').prototype()

const corsOptions = {
    origin: [process.env.URL, 'http://localhost:8080']
}

app.use(cors(corsOptions))
app.options('*', cors(corsOptions))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/version', versionRouter.router);
app.use('/signin', signin.router)
app.use('/signout',authentication, signout.router)
app.use('/ballot', authentication,permission(['voter', 'candidate']), ballot.router)
app.use('/userproperties', authentication, userproperties.router)
app.use('/election', authentication,permission(['authority']), manageElection.router)
module.exports = app;
