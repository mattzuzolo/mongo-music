const Artist = require('../models/artist');

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
module.exports = () => {
  const minQuery = Arist.find({}) //find all artists (empty object)
                  .sort({ age: 1 }) //1 = sort in ascending order
                  .limit(1) //only want first artist — DONT grab entire array of artists and get first index
                  .then(artists => artists[0].age); //only grab the age property (don't need any other information (e.g. name))

  const maxQuery = Artist.find({})
                  .sort({ age: -1 }) //sort in descending order
                  .limit(1)
                  .then(artists => artists[0].age);

  return Promise.all([minQuery, maxQuery])
    .then((result) => {
      return { min: result[0], max: result[1] };
    });
};
