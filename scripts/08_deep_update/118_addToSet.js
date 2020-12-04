// effective only for unique value
db.users.updateOne(
  { name: 'Maria' },
  { $addToSet: { hobbies: { title: 'Hiking', frequency: 2 } } }
);
