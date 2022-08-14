const router = require('express').Router();
const {
  getUserById,
  getAllUser,
  createUser,
  deleteUser,
  updateUser,
  removefriend,
  addfriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

// /api/users/:useId/friends/:friendId
router.route('/:userId/friends/:friendId'). post(addFriend).delete(removeFriend);

module.exports = router;
