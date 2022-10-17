const { Router } = require("express");
const router = Router();
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

var bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cookieParser());

const productRoute = require("./products");
const categoryRoute = require("./categories");

router.use("/products", productRoute);
router.use("/categories", categoryRoute);

module.exports = router;