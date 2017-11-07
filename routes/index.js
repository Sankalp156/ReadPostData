var express = require('express');
var router = express.Router();

/* GET home page. */


    router.post('/readNameAndRespond', function(req, res, next) {
        var value_name = req.body.name;
        res.send('Hello' + value_name);
    });


module.exports=router;

