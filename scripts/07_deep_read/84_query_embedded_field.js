// nested value query
db.movies.find({ 'rating.average': { $gt: 7 } }).pretty();
// query array
db.movies.find({ genres: 'Drama' }).pretty();
// exact equal
db.movies.find({ genres: ['Drama'] }).pretty();
