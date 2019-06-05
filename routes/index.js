const { Router } = require('express');
const v1 = require('./api/v1/index');

const router = Router();

// /api/v/{version}/{resource}
router.use('/1', v1);

module.exports = router;
