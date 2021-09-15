const mongoose = require('mongoose');

/**
 * Create a JS representation of a MongoDB Collection.
 * This model will only work for the collection it's pointed at.
 */
const Resident = mongoose.model('residents', {
    name: String,
    hasCar: Boolean,
    isBoomer: Boolean
})

module.exports = Resident;