const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,
  updateThought,
} = require('../../controllers/thoughtController');

// /api/thought
router.route('/').get(getAllThought).post(createThought);

// /api/students/:thoughtId
router.route('/:Id').get(getThoughtbyId).delete(deleteThought).put(updateThought)

// /api/students/:thoughtId/reaction
router.route('/:ThoughtId/reactions').post(addReaction);

// /api/students/:thoughtId/reactions
router.route('/:ThoughtId/:reactionId').delete(removeReaction);

module.exports = router;
