var express = require("express");
var router = express.Router();
var PlansController = require("../controllers/PlansController")

router.get("/plans",PlansController.index);

module.exports = router;