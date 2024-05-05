/* eslint-disable no-undef */
require('dotenv').config();
require('module-alias/register');
const express = require('express');
const router = require('@/router');
const path = require('path');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(router);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;

const main = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

main();
