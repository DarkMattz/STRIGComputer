var express = require('express')
var router = express.Router()
let session = require('express-session')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'STRIG Computer',
    popularProduct: require('../model/ProductGetter').getProductBasedOn('popular', 1)
  })
})

module.exports = router;