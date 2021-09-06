/**
 * MOCK DB DATA
 */
const allPlanets = [
    {
        id: 1,
        name: 'Mercury'
    },
    {
        id: 2,
        name: 'Venus'
    },
    {
        id: 3,
        name: 'Earth'
    },
];

/**
 * 
 * One way of creating a model is by using a Javascript Class with defined methods inside it.
 */

// class Planet {
//     constructor() {}

//     getAllPlanets() {
//         return allPlanets;
//     }

//     getPlanetById(id) {
//         return allPlanets.find((planet) => planet.id === id)
//     }

//     addNewPlanet(planetInfo) {}

//     editPlanetById(planetId, planetInfo) {}

//     deletePlanet(id) {}

// }

/**
 * 
 * Alternate Solution using only functions
 */

/**
 * Model method to fetch the data for the planets
 * @returns {Array<any>} All the planets.
 */
const getAllPlanets = () => {
    return allPlanets;
}

/**
 * Model method to fetch a planet's data by its ID
 * @param {number} id 
 * @returns {Object} Returns the planet if it exists, or undefined if it doesn't.
 */
const getPlanetById = id => {
    return allPlanets.find(planet => planet.id === id)
}

module.exports = {
    getAllPlanets,
    getPlanetById
};