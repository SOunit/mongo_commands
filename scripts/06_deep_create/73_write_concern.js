// journal is true means high security
// wtimeout is write time out, set maximum time to wait for process finish
db.persons.insertOne(
  { name: 'Aliya', age: 22 },
  { witeConcern: { w: 1, j: true, wtimeout: 200 } }
);
