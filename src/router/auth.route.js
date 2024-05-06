const router = require('express').Router();
const controller = require('@/controllers/auth.controller');

router.get('/login', controller.login);
router.post('/login/actions', controller.actionLogin);
router.get("/register" , controller.register);
router.post('/register/actions', controller.actionRegister);


module.exports = router;
