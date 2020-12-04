db.users.updateOne(
  { name: 'Maria' },
  { $push: { hobbies: { title: 'Sports', frequency: 2 } } }
);

db.users.updateOne(
  { name: 'Maria' },
  {
    $push: {
      hobbies: {
        $each: [
          { title: 'Good Wine', frequency: 1 },
          { title: 'Hiking', frequency: 2 },
        ],
        $sort: { frequency: -1 },
      },
    },
  }
);
