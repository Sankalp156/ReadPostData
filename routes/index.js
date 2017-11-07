var express = require('express');
var router = express.Router();

/* GET home page. */


    router.post('/readNameAndRespond', function(req, res, next) {
        res.send('Hello' + req.body.name);
});

module.exports = router;
