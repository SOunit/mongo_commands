// not equal is not popular, ne is more popular
db.movies.find({ runtime: { $not: { $eq: 60 } } }).count();
db.movies.find({ runtime: { $ne: 60 } }).count();
