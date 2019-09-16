const { Router } = require("express");

const userController = require("../../controllers/user.controller");
const router = Router();

router.get("/", userController.index);

module.exports = router;
