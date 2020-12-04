db.users.find({ 'hobbies.frequency': { $gt: 2 } });

db.users.find({ totalAge: { $gt: 35 } }).pretty();

// update all element in array by $[]
db.users.updateMany(
  { totalAge: { $gt: 35 } },
  { $inc: { 'hobbies.$[].frequency': -1 } }
);
