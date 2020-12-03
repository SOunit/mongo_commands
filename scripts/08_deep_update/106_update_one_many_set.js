db.users.updateOne(
  { name: 'Chris' },
  {
    $set: {
      hobbies: [
        { title: 'Sports', frequency: 3 },
        { title: 'Cooking', frequency: 2 },
        { title: 'Hiking', frequency: 1 },
      ],
    },
  }
);

db.users.updateMany(
  { 'hobbies.title': 'Sports' },
  { $set: { isSporty: true } }
);
