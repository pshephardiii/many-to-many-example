const Movie = require('../models/movie')

exports.createMovie = async (req, res) => {
  try {
    const createdMovie = await Movie.create(req.body)
    res.status(200).json(createdMovie)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.indexMovies = async (req, res) => {
  try {
    const foundMovies = await Movie.find({})
    res.status(200).json(foundMovies)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.showMovie = async (req, res) => {
  try {
    const foundMovie = await Movie.findOne({_id: req.params.id })
    res.status(200).json(foundMovie)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.addPerformer = async (req, res) => {

}

