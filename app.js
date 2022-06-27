var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var getCard = require('./routes/getCard');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(
    path.join(__dirname, './jarvis-app/build')));

app.get(['/', '/baseCard', '/refreshCard'], (req, res) => {
    res.sendFile(path.join(__dirname, '/jarvis-app/build/index.html'));
});

app.use('/getCard', getCard);


module.exports = app;
