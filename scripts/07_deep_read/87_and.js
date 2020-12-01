// and operator
db.movies
  .find({
    $and: [{ genres: 'Drama' }, { 'rating.average': { $gt: 9 } }],
  })
  .count();
// shotrcut without and operator
db.movies.find({ genres: 'Drama', 'rating.average': { $gt: 9 } }).count();

// why you need $and?
// this override
db.movies.find({ genres: 'Drama', genres: 'Horror' }).count();
// same with this
db.movies.find({ genres: 'Horror' }).count();
// genres = drama and horror
db.movies.find({ $and: [{ genres: 'Drama' }, { genres: 'Horror' }] }).count();
