const express = require("express");
const numberController = require("../controllers/numberController");
const router = express.Router();

router.route("/").get(numberController.getWelcome);

router.route("/api/classify-number").get(numberController.getWelcome);
// router.route("/api/classify-number").get(numberController.getNumberClass);

module.exports = router;
