db.users.updateOne(
  { name: 'Maria' },
  {
    $set: {
      age: 29,
      hobbies: [{ title: 'Good food', frequency: 3 }],
      isSporty: true,
    },
  },
  { upsert: true }
);
