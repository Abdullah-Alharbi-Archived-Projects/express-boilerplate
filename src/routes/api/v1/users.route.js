const { Router } = require("express");

const userController = require("../../../controllers/users.api.controller");
const router = Router();

router.get("/", userController.index);


module.exports = router;
