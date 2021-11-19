const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');
require('dotenv').config();
const mongoose = require('mongoose');
//const { Schema } = mongoose;
const port = process.env.PORT || 9000;

const app = express();

const mySecret = process.env['DB_URI'];

mongoose.connect(mySecret, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = new mongoose.Schema({ url: 'string' });

const Url = mongoose.model('Url', Schema);

const routesProject = require('./routes/index');

/* settings */
app.set('views', path.join(__dirname, 'src/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

/* middlewares */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, '/public/img', 'favicon.ico')));
app.use(morgan('dev'));

/* routes*/
app.use('/', routesProject);

/* static files */
app.use(express.static(path.join(__dirname, '/public/css')));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// process terminated
process.on('SIGTERM', () => {
    app.close(() => {
        console.log('Process terminated')
    })
});
