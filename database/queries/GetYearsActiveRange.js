const Artist = require('../models/artist');

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
module.exports = () => {
  const minQuery = Artist.find({}) //find all artists (empty object)
                  .sort({ yearsActive: 1 }) //1 = sort in ascending order
                  .limit(1) //only want first artist — DONT grab entire array of artists and get first index
                  .then(artists => artists[0].yearsActive); //only grab the yearsActive property (don't need any other information (e.g. name))

  const maxQuery = Artist.find({})
                  .sort({ yearsActive: -1 }) //sort in descending order
                  .limit(1)
                  .then(artists => artists[0].yearsActive);

  return Promise.all([minQuery, maxQuery])
    .then((result) => {
      return { min: result[0], max: result[1] };
    });
};
