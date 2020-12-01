// low performance
// expression is more popular
db.movies.find({ summary: { $regex: /musical/ } }).count();
