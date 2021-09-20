/**
 * Reusable validator function.
 * @param {*} starshipInfo The info about a starship.
 * @returns {Boolean} True if validation passed, false otherwise.
 */
const validateStarShipBody = ({ starshipName, starshipAge, starshipColor }) => {
  if (
    !starshipName ||
    starshipName.length < 6 ||
    !starshipAge ||
    !starshipAge < 0 ||
    !starshipColor
  ) {
    return false;
  }

  return true;
};

module.exports = {
  validateStarShipBody
};
