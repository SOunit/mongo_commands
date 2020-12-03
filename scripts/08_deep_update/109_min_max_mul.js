// update if min is param
db.users.updateOne({ name: 'Chris' }, { $min: { age: 38 } });

// update if param is max
db.users.updateOne({ name: 'Chris' }, { $max: { age: 38 } });

// multiply age 1.1
db.users.updateOne({ name: 'Chris' }, { $mul: { age: 1.1 } });
