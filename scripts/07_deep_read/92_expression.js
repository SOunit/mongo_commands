db.sales.insertMany([
  { volume: 100, target: 120 },
  { volume: 89, target: 80 },
  { volume: 200, target: 177 },
]);

db.sales.find({ $expr: { $gt: ['$volume', '$target'] } }).count();

db.sales.find({
  $expr: {
    $gt: [
      {
        $cond: {
          if: { $gte: ['$volume', 190] },
          then: { $subtract: ['$volume', 30] },
          else: '$volume',
        },
      },
      '$target',
    ],
  },
});
