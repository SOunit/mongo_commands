db.dropDatabase();

db.persons.insertOne({
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
});

db.persons.insertOne({
  name: 'Manuel',
  age: 31,
  hobbies: ['Cars', 'Cooking'],
});

db.persons.insertMany([{ name: 'Maria' }, { Name: 'Chris' }]);

// own id
db.hobbies.insertMany([
  { _id: 'sports', name: 'Sports' },
  { _id: 'cooking', name: 'Cooking' },
  { _id: 'cars', name: 'Cars' },
]);

// insert execute if other data failed
db.hobbies.insertMany(
  [
    { _id: 'sports', name: 'Sports' },
    { _id: 'cooking', name: 'Cooking' },
    { _id: 'cars', name: 'Cars' },
    { _id: 'books', name: 'Books' },
  ],
  { ordered: false }
);
