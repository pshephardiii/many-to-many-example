const express = require('express')
const router = express.Router()
const movieController = require('../controllers/moviesController')

router.post('/', movieController.createMovie)
router.get('/', movieController.indexMovies)
router.get('/:id', movieController.showMovie)
router.post('/:movieId/performers/:performerId', movieController.addPerformer)

module.exports = router