const Artist = require('../models/artist');

/**
 * Deletes a single artist from the Artists collection
 * @param {string} _id - The ID of the artist to delete.
 * @return {promise} A promise that resolves when the record is deleted
 */
module.exports = (_id) => {
  //Preferable solution
  return Artist.remove({ _id: _id });

  //Alternate (not great) solution — touches database twice
  // return Artist.findById(_id) => {
    // .then((artist) => artist.remove());
  // }

};
