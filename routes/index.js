var express = require('express');
let bodyParser = require('body-parser');
var router = express.Router();
let algritms = require('../src/algoritms');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.use(bodyParser.json());
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/products', algritms.getAllProduct);
router.get('/services', algritms.getAllServices);
router.post('/newproduction/', algritms.newProduction);
router.post('/newproduct/', algritms.newProduct);

module.exports = router;
