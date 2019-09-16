const { Router } = require("express");

const users = require("./users.route");

const router = Router();

// resources goes here
router.use("/users/", users);

module.exports = router;
