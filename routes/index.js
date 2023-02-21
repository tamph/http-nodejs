var express = require('express');
const controller = require('../controllers/controller');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.route('/').get(controller.value)
router.route('/increase').get(controller.increase)

module.exports = router;
