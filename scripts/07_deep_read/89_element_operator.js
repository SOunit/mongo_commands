db.users.find({ age: { $exists: true } }).count();
db.users.find({ age: { $exists: true, $gt: 30 } }).count();

// useful and common pettern
db.users.find({ age: { $exists: true, $ne: null } }).count();
