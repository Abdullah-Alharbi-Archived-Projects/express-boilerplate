const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  return res.send({ message: req.__("hello_world") });
});

module.exports = router;
