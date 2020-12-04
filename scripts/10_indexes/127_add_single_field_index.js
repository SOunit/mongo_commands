db.contacts.find({ 'dob.age': { $gt: 60 } }).count();

db.contacts
  .explain()
  .find({ 'dob.age': { $gt: 60 } })
  .count();

db.contacts
  .explain('executionStats')
  .find({ 'dob.age': { $gt: 60 } })
  .count();

db.contacts.createIndex({ 'dob.age': 1 });
