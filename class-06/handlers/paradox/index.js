const Paradox = require('../../core/paradox');

const getAllParadoxes = async (req, res, next) => {
  try {
    /**
     * The find method is intrinsic to both Mongo and Mongoose.
     * It performs a get / fetch operation.
     * If no argument is passed, it will query the db for every document in the collection.
     */
    const allParadoxes = await Paradox.find();
    return res.status(200).json(allParadoxes);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const addNewParadox = async (req, res, next) => {
  /**
   * Object destructuring, extracting the name and description from the request body
   */
  const { name, description } = req.body;

  /**
   * Validation of the request body.
   */
  if (!name || name.length < 6 || !description) {
    return res.status(400).json('Invalid paradox data.');
  }

  try {
    /**
     * The Mongoose (not Mongo) function for inserting documents in the collection is .create()
     * It takes an object as its argument of the document that needs to be created.
     * The object should follow the schema set in the collection model.
     * Note that the _id field is missing, Mongo creates this field when document insertion is succesful.
     */
    const newParadox = await Paradox.create({ name, description }); // Object literal
    // {name: name, description: description}
    return res.status(201).json(newParadox._id);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const editParadox = async (req, res, next) => {
  /**
   * Extracting the document id from the request params.
   */
  const paradoxId = req.params.id;
  /**
   * Object destructuring, extracting the name and description fields from the req.body.
   */
  const { name, description } = req.body;

  /**
   * Additional validation
   */
  if (!paradoxId || !name || !description) {
    return res.status(400).json('Cannot update paradox!');
  }

  try {
    /**
     * Self-explanatory function (the best kind!), find the document first by its id (_id)
     * Afterwards, perform an update operation on the document.
     * First argument is the document id, second the fields that will be overwritten
     */
    await Paradox.findByIdAndUpdate(paradoxId, { name, description });
    return res.status(200).json('Paradox updated.');
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteParadox = async (req, res, next) => {
  /**
   * Extracting the document id from the request params.
   */
  const paradoxId = req.params.id;
  if (!paradoxId) {
    return res.status(400).json('Cannot find paradox!');
  }

  try {
    /**
     * The delete function of Mongo. Takes an object that tells it how to delete a document
     * For example, the code below will make Mongo delete a document where the _id of the document
     * is the same as the one extracted from the request params
     */
    await Paradox.deleteOne({ _id: paradoxId });
    res.status(200).json(`Paradox with id: ${paradoxId} was deleted.`);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllParadoxes,
  addNewParadox,
  editParadox,
  deleteParadox
};
