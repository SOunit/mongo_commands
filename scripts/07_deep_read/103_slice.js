db.movies.find({}, { genres: { $slice: 2 }, name: 1 }).count();
// 1 item skip, and get 2 items
db.movies.find({}, { genres: { $slice: [1, 2] }, name: 1 }).count();
