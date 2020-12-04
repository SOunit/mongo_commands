// where title = sports and frequency = 3
db.users
  .find({
    $and: [{ 'hobbies.title': 'Sports' }, { 'hobbies.frequency': { $gte: 3 } }],
  })
  .pretty();

// where title = sports and frequency = 3 in one element
db.users
  .find({
    hobbies: { $elemMatch: { title: 'Sports', frequency: { $gte: 3 } } },
  })
  .pretty();

db.users.updateMany(
  {
    hobbies: { $elemMatch: { title: 'Sports', frequency: { $gte: 3 } } },
  },
  { $set: { 'hobbies.$.highFrequency': true } }
);
