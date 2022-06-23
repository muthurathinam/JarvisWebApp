var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(process.cwd() + '/jarvis-app/build/index.html');
});

module.exports = router;
