db.ratings.count();
db.ratings.findOne();
db.ratings.createIndex({ age: 1 });

db.ratings.expain('executionStats').find({ age: { $gt: 80 } });
db.ratings.getIndexes();
db.ratings.dropIndex('');

db.ratings.createIndex({ age: 1 }, { background: true });
