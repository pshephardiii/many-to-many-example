const Performer = require('../models/performer')

exports.indexPerformers = async (req, res) => {
  try {
    const foundPerformers = await Performer.find({})
    res.status(200).json(foundPerformers)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.createPerformer = async (req, res) => {
  try {
    const createdPerformer = await Performer.create(req.body)
    res.status(200).json(createdPerformer)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}