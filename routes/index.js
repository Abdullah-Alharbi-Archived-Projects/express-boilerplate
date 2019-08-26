const { Router } = require("express");
const users = require("./api/users");
const auth = require("./api/auth");

const router = Router();

// REQUEST -> /api/{resource}/

router.use("/users/", users);
router.use("/auth/", auth);

module.exports = router;
