db.users.deleteOne({ name: 'Chris' });
db.users.deleteMany({ totalAge: { $gt: 30 }, isSporty: true });
db.users.deleteMany({ totalAge: { $exists: false }, isSporty: true });
