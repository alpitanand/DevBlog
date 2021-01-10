const { Router } = require("express");
const router = Router();

router.use('/users', require('./users'))
router.use('/feed', require('./feed'))


module.exports = router;