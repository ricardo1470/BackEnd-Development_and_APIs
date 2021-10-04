const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');

const port = process.env.PORT || 9000;

const routesProject = require('./routes/index');

const app = express();

/* settings */
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(morgan('dev'));

/* middlewares */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));