const Planet = require('../../models/planets');

const getAllPlanets = async (req, res, next) => {
    const allPlanets = Planet.getAllPlanets();
    res.status(200).json(allPlanets);
}

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