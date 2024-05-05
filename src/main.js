/* eslint-disable no-undef */
require('dotenv').config();
const express = require('express');
const router = require('./router');

const app = express();
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;

const main = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

main();
