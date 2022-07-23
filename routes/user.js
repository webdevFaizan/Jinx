const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');
const dataController = require('../controllers/data_controller');

router.get('/', userController.user);
router.get('/data', userController.data);


module.exports=router;