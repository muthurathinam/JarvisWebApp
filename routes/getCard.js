var express = require('express');
var router = express.Router();

router.get('/', function (req, res, _next) {
  let returnValue = { card: "Unknown Type of Card request" };
  switch (req.query && req.query.cardType) {
    case "baseCard":
      returnValue = { card: "Base Card" };
      break;

    case "refreshCard":
      returnValue = { card: "Refresh Card" };
      break;
  }
  res.send(returnValue);
});

module.exports = router;
