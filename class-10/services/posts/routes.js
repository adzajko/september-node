const router = require('express').Router();
const { addNewPost, getAllPosts } = require('./handlers');

/**
 * Because the proxy handles the requests, we need to listen to '/' here
 * in order to listen to /api/v1/posts
 */
router
  .route('/')
  .get(getAllPosts)
  .post(addNewPost);

router.use('*', (req, res, next) => {
  return res.status(200).json('Zdravo brale od Nova Makedonija');
});

module.exports = router;
