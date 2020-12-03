db.users.find({ hobbies: { $all: ['Hiking', 'Sports', 'Cars'] } }).count();
