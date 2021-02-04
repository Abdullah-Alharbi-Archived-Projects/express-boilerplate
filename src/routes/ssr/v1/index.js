const { Router } = require("express");

const users = require("./users.route");
const homeController = require("../../../controllers/home.controller");

const router = Router();

// SSR routes here
router.use("/users/", users);
router.use("/", homeController.index);

module.exports = router;
