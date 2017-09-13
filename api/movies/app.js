const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));

const storiesRouter = require('./router/movies_router');
app.use(storiesRouter);

module.exports = app;