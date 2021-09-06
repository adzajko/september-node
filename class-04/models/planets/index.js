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

const getAllPlanets = () => {
    return allPlanets;
}

const getPlanetById = id => {
    return allPlanets.find(planet => planet.id === id)
}

module.exports = {
    getAllPlanets,
    getPlanetById
};