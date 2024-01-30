const express = require('express');
const morgan = require('morgan');
const app = express();
const cors=require('cors');
//SETTINGS
app.set('port', process.env.PORT || 3200);

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('./routers/routes.peliculas'));

module.exports = app;