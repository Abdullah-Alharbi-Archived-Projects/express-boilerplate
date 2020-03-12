const { Router } = require("express");

const userController = require("../../../controllers/user.controller");
const router = Router();

router.get("/", userController.ssrMethod);

module.exports = router;
