// create test data
db.users.insertMany([{ name: 'Max', email: 'max@test.com' }, { name: 'Manu' }]);

// create index
db.users.createIndex({ email: 1 });
// drop index
db.users.dropIndex({ email: 1 });

// create index
db.users.createIndex({ email: 1 }, { unique: true });
// add document, error! because no value dupulicates!
db.users.insertOne({ name: 'Ana' });
// create other index
db.users.createIndex(
  { email: 1 },
  { unique: true, partialFilterExpression: { email: { $exists: true } } }
);
