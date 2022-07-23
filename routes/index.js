const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
const signController= require('../controllers/sign_controller');


router.get('/', homeController.home);
router.use('/user', require('./user'));
router.get('/signup', signController.signup);
router.get('/signin', signController.signin);
router.post('/signuppage', signController.signupadd);
router.post('/signincheck', signController.signincheck);

module.exports=router;