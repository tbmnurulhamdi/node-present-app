const express = require('express');
const router = express.Router();
const controller = require("../controller/indexController"); //memamnggil indexController


router.get('/', controller.adminController.getUser);

module.exports = router;
