const express = require("express");
const router = new express.Router();
const userController = require("../controller/user");

router.post("/", userController.createUser);
router.get("/", userController.getUser);


module.exports = router;
