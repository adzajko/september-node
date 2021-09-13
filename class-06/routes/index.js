const router = require('express').Router();
const {
  deleteParadox,
  editParadox,
  addNewParadox,
  getAllParadoxes
} = require('../handlers/paradox');

router.post(`${process.env.API_PREFIX}/paradoxes`, addNewParadox); // C (create)
router.get(`${process.env.API_PREFIX}/paradoxes`, getAllParadoxes); // R (read)
router.put(`${process.env.API_PREFIX}/paradoxes/:id`, editParadox); // U (update)
router.delete(`${process.env.API_PREFIX}/paradoxes/:id`, deleteParadox); // D (delete)

module.exports = router;
