db.sales.insertMany([
  { volume: 100, target: 120 },
  { volume: 89, target: 80 },
  { volume: 200, target: 177 },
]);

db.sales.find({ $expr: { $gt: ['$volume', '$target'] } }).count();
