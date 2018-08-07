const Artist = require('../models/artist');

/**
 * Edits a single artist in the Artists collection
 * @param {string} _id - The ID of the artist to edit.
 * @param {object} artistProps - An object with a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves when the record is edited
 */


//TOUCH DB AS LITTLE AS POSSIBLE

//first param finds artist
//second param provides updated data
module.exports = (_id, artistProps) => {
  return Artist.update({ _id: _id }, artistProps);

};
