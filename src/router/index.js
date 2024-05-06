const router = require('express').Router();
const homeRoute = require('@/router/home.router');

router.use('/', homeRoute);

module.exports = router;
