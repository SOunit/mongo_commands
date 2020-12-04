db.users.updateOne(
  { name: 'Maria' },
  { $pull: { hobbies: { title: 'Good Wine' } } }
);

db.users.updateOne({ name: 'Chris' }, { $pop: { hobbies: 1 } });
