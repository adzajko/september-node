const router = require('express').Router();
/**
 * Both imports are required for configuring the swagger UI
 * First import is the library itself
 * Second import is the location of the .json or .yaml file holding your API docs.
 */
const swaggerUi = require('swagger-ui-express');
const apiDocs = require('../api-docs.json'); 

const planetsController = require('../controllers/planets');

router.get('/planets', planetsController.getAllPlanets);
router.get('/planets/:id', planetsController.getPlanetById);

/**
 * SWAGGER ROUTES
 */

/**
 * Both methods here are mandatory to show your Swagger UI.
 * More or less, they remain copy/paste
 */
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(apiDocs));

module.exports = router;

// mongo.findOne({ id: 6 }) BSON