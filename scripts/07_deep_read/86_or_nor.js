// less than
db.movies.find({ 'rating.average': { $lt: 5 } }).count();
// greater than
db.movies.find({ 'rating.average': { $gt: 9.3 } }).count();

db.movies
  .find({
    $or: [{ 'rating.average': { $lt: 5 } }, { 'rating.average': { $gt: 9.3 } }],
  })
  .count();

db.movies
  .find({
    $nor: [
      { 'rating.average': { $lt: 5 } },
      { 'rating.average': { $gt: 9.3 } },
    ],
  })
  .count();
