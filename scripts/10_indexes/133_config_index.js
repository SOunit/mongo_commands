db.contacts.createIndex({ email: 1 }, { unique: true });
db.contacts.find({ email: 'abigail.clark@example.com' }).count();
