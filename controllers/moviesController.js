const Movie = require('../models/movie')
const Performer = require('../models/performer')

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
  try {
    // the performerId harkens back to moviesRouter and the parameter name we chose
    const foundPerformer = await Performer.findOne({ _id: req.params.performerId })
    if(!foundPerformer) throw new Error(`Could not locate performer ${ req.params.performerId }`)
    const foundMovie = await Movie.findOne({ _id: req.params.movieId })
    if(!foundMovie) throw new Error (`Could not locate movie ${ req.params.movieId }`)
    // many to many
    foundMovie.cast.push(foundPerformer._id)
    foundPerformer.credits.push(foundMovie._id)
    await foundMovie.save()
    await foundPerformer.save()
    res.status(200).json({
      message: `Successfully associated performer with id ${req.params.performerId} with movie with id ${req.params.movieId}`, 
      movie: foundMovie,
      performer: foundPerformer
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

