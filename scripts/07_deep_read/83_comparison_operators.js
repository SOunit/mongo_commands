// equals
db.movies.find({ runtime: { $eq: 60 } }).pretty();
// not equals
db.movies.find({ runtime: { $ne: 60 } }).pretty();
// lower than
db.movies.find({ runtime: { $lt: 60 } }).pretty();
// lower than or equal
db.movies.find({ runtime: { $lte: 60 } }).pretty();
// greater than
db.movies.find({ runtime: { $gt: 60 } }).pretty();
// greater than or equal
db.movies.find({ runtime: { $gte: 60 } }).pretty();
