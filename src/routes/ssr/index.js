const { Router } = require("express");

const v1 = require("./v1");

const router = Router();

// ssr versions goes here without prefix
// how ever you can specify that if you want
router.use(v1);

module.exports = router;
