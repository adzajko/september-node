const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const apiDocs = require('../api-docs.json'); 

const planetsController = require('../controllers/planets');

router.get('/planets', planetsController.getAllPlanets);
router.get('/planets/:id', planetsController.getPlanetById);

/**
 * SWAGGER ROUTES
 */

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(apiDocs));

module.exports = router;

// mongo.findOne({ id: 6 }) BSON