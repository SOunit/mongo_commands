db.movies
  .find({ 'rating.average': { $gt: 9 } }, { $elemMatch: { $eq: 'Horror' } })
  .pretty();
