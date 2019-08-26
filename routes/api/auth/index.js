const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send({ token: req.__("auth") });
});

module.exports = router;
