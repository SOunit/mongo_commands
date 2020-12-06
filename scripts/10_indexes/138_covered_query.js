db.customers.insertMany([
  { name: 'Max', age: 29, salary: 3000 },
  { name: 'Manu', age: 30, salary: 4000 },
]);

db.customers.createIndex({ name: 1 });
db.customers.explain('executionStats').find({ name: 'Max' });

// covered query (index covered query is the fastest)
db.customers
  .explain('executionStats')
  .find({ name: 'Max' }, { _id: 0, name: 1 });
