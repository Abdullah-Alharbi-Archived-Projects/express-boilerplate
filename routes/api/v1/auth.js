const { Router } = require('express');

const router = Router();


router.post('/', (req, res) => {
  res.status(200).send({ token: 'superSecretToken' });
});

module.exports = router;
