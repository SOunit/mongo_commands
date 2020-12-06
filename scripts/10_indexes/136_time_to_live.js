db.sessions.insertOne({ data: 'random text', createdAt: new Date() });

// delete data after 10 seconds, it works only with date object!
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 10 });
