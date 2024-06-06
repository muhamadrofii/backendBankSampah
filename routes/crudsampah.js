const express = require('express');

const CrudController = require('../controller/crudsampah');

const router = express.Router();

router.get('/', CrudController.getAllCrud);

router.post('/', CrudController.createSampah);

module.exports = router;