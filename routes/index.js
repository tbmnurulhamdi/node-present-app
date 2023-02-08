var express = require('express');
var router = express.Router();
const controller = require("../controller/adminController")

/* GET home page. */
router.get('/', controller.getUser);

module.exports = router;
