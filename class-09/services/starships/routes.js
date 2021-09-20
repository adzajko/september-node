const router = require('express').Router();
const { getAllStarShips, addNewStarship } = require('./handlers');
const PREFIX = process.env.API_PREFIX;

// router.get(`${PREFIX}/starships`, getAllStarShips);
// router.post(`${PREFIX}/starships`, addNewStarship);
router
  .route(`${PREFIX}/starships`)
  .get(getAllStarShips)
  .post(addNewStarship);

module.exports = router;
