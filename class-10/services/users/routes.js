const router = require('express').Router();
const { addNewUser, getAllUsers } = require('./handlers');

/**
 * The proxy handles the listening on /api/v1/users. Here we only need to listen to '/'
 */
router
  .route('/')
  .get(getAllUsers)
  .post(addNewUser);

router.use('*', (req, res, next) => {
  return res.status(200).json('Korisnicite ne se zadovolni.');
});

module.exports = router;
