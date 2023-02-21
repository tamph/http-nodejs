var express = require('express');
const controller = require('../controllers/controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/increase').get(controller.increase)
router.get('/value').get(controller.value)

module.exports = router;
