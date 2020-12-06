db.contacts.getIndexes();
db.contacts.createIndex(
  { 'dob.age': 1 },
  { partialFilterExpression: { gender: 'male' } }
);

db.contacts.find({ 'dob.age': { $gt: 60 } }).pretty();
db.contacts.explain().find({ 'dob.age': { $gt: 60 } });
db.contacts.explain().find({ 'dob.age': { $gt: 60 }, gender: 'male' });
