const express = require('express')
const router = express.Router()
const performerController = require('../controllers/performersController')

router.get('/', performerController.indexPerformers)
router.post('/', performerController.createPerformer)

module.exports = router