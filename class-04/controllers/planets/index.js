// Always remember to import your models.
const Planet = require('../../models/planets');

/**
 * Handler method that is passed as a reference to a router function. 
 * Remember, this function needs to have access to the request, response and next arguments.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getAllPlanets = async (req, res, next) => {
    const allPlanets = Planet.getAllPlanets();
    // res.status(200).json(allPlanets);
    /**
     * The res.render() method here is used with template engines
     * It substitues the usual res.status()
     * The string argument passed here is the location of the .ejs file located in the views folder
     * The second argument represents the data that will be passed to the .ejs template.
     */
    res.render('planets/planets', {
        planets: allPlanets
    })
}

/**
 * Standard request handler function.
 * Note the request, response and next arguments.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getPlanetById = async (req, res, next) => {
    const id = +req.params.id;
    const myPlanet = Planet.getPlanetById(id);
    if (!myPlanet) {
        res.status(400).json('Planet got Pluto\'d');
    } else {
        res.status(200).json(myPlanet);
    }
}

module.exports = {
    getAllPlanets,
    getPlanetById
}