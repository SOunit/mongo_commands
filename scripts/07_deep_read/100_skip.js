db.movies
  .find()
  .sort({ 'rating.average': 1, runtime: -1 })
  .skip(100)
  .limit(10)
  .count();
