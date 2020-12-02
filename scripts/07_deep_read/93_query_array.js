db.users.insertMany([
  { hobbies: [{ title: 'Sports' }] },
  { hobbies: [{ title: 'Cars' }] },
  { hobbies: [{ title: 'Sports' }] },
  { hobbies: [{ title: 'Sports' }] },
]);

db.users.find({ 'hobbies.title': 'Sports' }).count();
