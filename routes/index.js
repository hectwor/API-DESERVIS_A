var express = require('express');
var router = express.Router();
let queries = require('../src/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/productos', function(req, res, next) {
  queries.selectproductos(res, next)
});

module.exports = router;
