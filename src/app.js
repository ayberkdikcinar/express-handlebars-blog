const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const mainRouter = require('./routes/main.router')


app.use(bodyParser.json())
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.engine('handlebars', engine({
    extname: 'handlebars',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',

}));
app.use('/', mainRouter);


module.exports = app
