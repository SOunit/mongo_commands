db.users.insertOne({ name: 'Chris', hobbies: ['Sports', 'Cars', 'Hiking'] });

db.users.find({ hobbies: { $size: 3 } }).count();
