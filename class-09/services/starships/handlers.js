const Starship = require('../../core/starships');
const { validateStarShipBody } = require('../../core/validators');

const getAllStarShips = async (req, res, next) => {
  // Extracting the queryparams of a request.
  const queryParams = req.query;
  try {
    /**
     * Get All starships from DB, sorted in descending order by their age.
     */
    // const starships = await Starship.find().sort({ starshipAge: 'desc' });

    /**
     * Atomic operator less-than-equal
     */
    // const starships = await Starship.find()
    //   .where('starshipAge')
    //   .lte(10);

    /**
     * Crude attempt at pagination using the atomic operators .limit() .skip()
     */
    const starships = await Starship.find()
      .limit(+queryParams.amountPerPage)
      .skip(1);
    // const starhipCount = await Starship.find().count()
    return res.status(200).json(starships);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const addNewStarship = async (req, res, next) => {
  const { starshipName, starshipAge, starshipColor } = req.body;
  if (!validateStarShipBody(req.body)) {
    return res.status(400).json('Invalid starship info!');
  }

  try {
    // const something = Starship.findOne({starshipName})
    await Starship.create({
      starshipName,
      starshipAge,
      starshipColor
    });
    return res.status(201).json('Starship was created!');
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllStarShips,
  addNewStarship
};
