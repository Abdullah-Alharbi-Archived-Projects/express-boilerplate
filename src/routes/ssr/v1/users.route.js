const { Router } = require("express");

const userController = require("../../../controllers/user.controller");
const router = Router();

router.get("/", userController.index);
router.get("/create/", userController.create);
router.post("/", userController.store);


module.exports = router;
