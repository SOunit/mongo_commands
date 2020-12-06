db.contacts.createIndex({ gender: 1 });
db.contacts.dropIndex({ gender: 1 });
db.contacts.createIndex({ 'dob.age': 1, gender: 1 });

// speed up queries by index
db.contacts.explain().find({ 'dob.age': 35, gender: 'male' });
db.contacts.explain().find({ 'dob.age': 35 });
