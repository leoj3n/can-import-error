'use strict';

const cors = require('cors');
const express = require('express');
const resolve = require('path').resolve;
const compress = require('compression');
const middleware = require('./middleware');

const app = express();

app.set('host', 'localhost');
app.set('client', resolve('../client/'));
app.set('port', process.env.PORT || 3000);

app
  .options('*', cors())
  .use(cors())
  .use(compress())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(express.static(app.get('client')));

middleware(app);

module.exports = app;
