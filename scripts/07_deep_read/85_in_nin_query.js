// in
db.movies.find({ runtime: { $in: [30, 42] } }).pretty();
// not in
db.movies.find({ runtime: { $nin: [30, 42] } }).pretty();
