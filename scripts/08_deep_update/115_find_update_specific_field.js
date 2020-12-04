db.users.find({ 'hobbies.frequency': { $gt: 2 } }).pretty();

db.users.updateMany(
  { 'hobbies.frequency': { $gt: 2 } },
  { $set: { 'hobbies.$[el].goodFrequency': true } },
  { arrayFilters: [{ 'el.frequency': { $gt: 2 } }] }
);
