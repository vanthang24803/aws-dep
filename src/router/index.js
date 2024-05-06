const router = require('express').Router();
const homeRoute = require('@/router/home.router');
const authRoute = require('@/router/auth.route');

router.use('/', [homeRoute, authRoute]);

module.exports = router;
