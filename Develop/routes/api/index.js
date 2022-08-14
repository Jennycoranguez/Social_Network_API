const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/user', userRoutes);
router.use('/thoughts', thoughcdtRoutes);

module.exports = router;
