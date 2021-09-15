const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../api-docs.json'); // ../ means one level UP ./ means current level
const {
  addNewResident,
  getAllResidents,
  updateResident,
  deleteResident
} = require('../controllers/residents');

const prefix = process.env.API_PREFIX;

router.post(`${prefix}/residents`, addNewResident); // C (Create)
router.get(`${prefix}/residents`, getAllResidents); // R (Read)
router.put(`${prefix}/residents/:id`, updateResident); // U (Update)
router.delete(`${prefix}/residents/:id`, deleteResident); // D (Delete)

router.use(`${prefix}/api-docs`, swaggerUi.serve);
router.get(`${prefix}/api-docs`, swaggerUi.setup(swaggerDocs));

router.use('*', (req, res, next) => {
  return res.status(404).json('Nije tu brat43.');
});

module.exports = router;
