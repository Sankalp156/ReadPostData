var express = require('express');
var router = express.Router();

/* GET home page. */

module.exports = router;
    router.post('/readNameAndRespond', function(req, res, next) {
        var value_name = req.body.name;
        res.send('Hello' + value_name);

});


