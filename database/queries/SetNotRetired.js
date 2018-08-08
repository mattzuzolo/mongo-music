const Artist = require('../models/artist');

/**
 * Sets a group of Artists as not retired
 * @param {array} _ids - An array of the _id's of of artists to update
 * @return {promise} A promise that resolves after the update
 */
module.exports = (_ids) => {
  return Artist.update( //multi is not enabled by default. Must include it as third argument
    { _id: { $in: _ids } }, //if id is in this list of ids
    { retired: false }, //set these as true if part of above group
    { multi: true }, //must include for multiple to update.
  );
};
