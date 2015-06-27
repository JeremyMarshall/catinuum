'use strict';

var express = require('express');
var controller = require('./set.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:set', controller.set);
router.get('/inter/*', controller.inter);

module.exports = router;
