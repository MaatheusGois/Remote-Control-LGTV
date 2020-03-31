const express = require('express');
const {powerCtrl} = require('../../controllers');
const router = new express.Router();

router.get('/connect', powerCtrl.connect);
router.get('/disconnect', powerCtrl.disconnect);

module.exports = router;
