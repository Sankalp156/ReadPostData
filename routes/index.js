var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next)
{
    res.render('index',{title:'Express'});
});

var bodyParser = require('body-parser');
var path = require ('path'); //to work with separtors on any OS including Windows
var querystring = require('querystring'); //for use in GET Query string of form URI/path?name=value

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true }));

module.exports = router;
    router.post('/readNameAndRespond', function(req, res, next) {
        var value_name = req.body.name;
        res.send('Hello' + value_name);

});


