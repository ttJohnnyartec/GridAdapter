var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  res.send(
    '{"success":true,"ErrorMessage":{"Error":"0","Message":null},"data":[{"CodeID":1,"CodeTypeNo":"01","CodeNo":"02","CodeName":"Theme","IsDisabled":false,"IsNew":false,"IsUpdate":false},{"CodeID":2,"CodeTypeNo":"01","CodeNo":"03","CodeName":"SbBetType","IsDisabled":false,"IsNew":false,"IsUpdate":false},{"CodeID":10,"CodeTypeNo":"01","CodeNo":"04","CodeName":"OddsType","IsDisabled":false,"IsNew":false,"IsUpdate":false},{"CodeID":11,"CodeTypeNo":"01","CodeNo":"05","CodeName":"PointStatType","IsDisabled":false,"IsNew":false,"IsUpdate":false},{"CodeID":20,"CodeTypeNo":"01","CodeNo":"06","CodeName":"GameType","IsDisabled":false,"IsNew":false,"IsUpdate":false}],"total":5}'
  );
});

module.exports = router;
