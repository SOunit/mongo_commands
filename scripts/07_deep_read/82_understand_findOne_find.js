db.movies.findOne();
db.movies.find().pretty();
db.movies.find({ name: 'The Last Ship' }).pretty();
db.movies.find({ runtime: 60 }).pretty();
