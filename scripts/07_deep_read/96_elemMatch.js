db.users
  .find({
    $and: [{ 'hobbies.title': 'Sports' }, { 'hobbies.frequency': { $gte: 3 } }],
  })
  .count();

db.users
  .find({
    hobbies: { $elemMatch: { title: 'Sports', frequency: { $gte: 3 } } },
  })
  .count();
