const express = require('express');
const router = express.Router();

router.use("/admin", require('./admin.route.js'));
router.use("/user", require('./user.route.js'));

module.exports = router;