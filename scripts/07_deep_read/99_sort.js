db.movies.find().sort({ 'rating.average': 1, runtime: -1 }).pretty();
