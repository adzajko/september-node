// All the database interactions require the model representation.
const Resident = require('../../models/Resident');

const getAllResidents = async (req, res, next) => {
  try {
    const allResidents = await Resident.find();
    return res.status(200).json(allResidents);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const addNewResident = async (req, res, next) => {
  const { name, hasCar, isBoomer } = req.body;
  if (!name || hasCar === undefined || isBoomer === undefined) {
    return res.status(400).json('Invalid data!');
  }

  try {
    await Resident.create({ name, hasCar, isBoomer });
    return res.status(201).json('Resident created.');
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateResident = async (req, res, next) => {
  const id = req.params.id;
  const { name, hasCar, isBoomer } = req.body;

  if (!id || !name || hasCar === undefined || isBoomer === undefined) {
    return res.status(400).json('Invalid data!');
  }

  try {
    await Resident.findByIdAndUpdate(id, { name, hasCar, isBoomer });
    return res.status(200).json(`Resident #${id} was updated.`);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteResident = async (req, res, next) => {
  const id = req.params.id;
  try {
    await Resident.findOneAndDelete({ _id: id });
    return res.status(200).json('OK');
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllResidents,
  addNewResident,
  updateResident,
  deleteResident
};
