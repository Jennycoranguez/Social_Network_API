const { Course, Student, Thought } = require('../models');

module.exports = {
  // Get all thoughts
  getAllThought(req, res) {
    Thought.find()
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },
  // Get one thought by Id
    getThoughtById(req, res) {
    Thought.findOne({ _id:params.id})
      .select('-__v')
      .then((course) =>
        !course
          ? res.status(404).json({ message: 'No thoughts found with that id' })
          : res.json(course)
      )
      .catch((err) => res.status(400).json(err));
  },
  // Create a thought
   createThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        return res.status(404).json(err);
      });
  },
  //create a reaction
  createReaction(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        return res.status(404).json(err);
      });
  },
  //Delete thought by its Id
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.studentId })
      .then((dbThoughtData) =>
        !dbThoughtData
          ? res.status(404).json({ message: 'No thoughts exists with that id!' })
          : User.findOneAndUpdate(
              { students: req.params.studentId },
              { $pull: { thoughts: req.params.Id } },
              { new: true }
            )
      )
      .then((dbThoughtData) =>
        !dbThoughtData
          ? res.status(404).json({
              message: 'No User found witht this id',
            })
          : res.json({ message: 'user id successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Delete a reaction
  deleteReaction(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((dbThoughtData) =>
        !dbThoughtData
          ? res.status(404).json({ message: 'No reaction exists' })
          : Course.findOneAndUpdate(
              { students: req.params.studentId },
              { $pull: { reactions: params.reactionId } },
              { new: true }
            )
      )
      .then((dbThoughtData) =>
        !dbThoughtData
          ? res.status(404).json({
              message: 'reactions not found',
            })
          : res.json({ message: 'reactions successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Update a thought by Id
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.Id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((dbThoughtData) =>
        !dbThoughtData
          ? res.status(404).json({ message: 'No thoughts found with that id!' })
          : res.json(dbThoughtData)
      )
      .catch((err) => res.status(500).json(err));
  },
};
