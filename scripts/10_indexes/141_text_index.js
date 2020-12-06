db.products.insertMany([
  {
    title: 'A book',
    description: 'this is an awesome book about a young artist!',
  },
  {
    title: 'Red T-Shirt',
    description: "This T-Shirt is red and it's pretty awesome!",
  },
]);

// text index!
db.products.createIndex({ description: 'text' });
// 1 text index per 1 collection, its expensive
db.products.find({ $text: { $search: 'awesome' } });
// keyword search
db.products.find({ $text: { $search: 'red book' } });
// sentence searchc
db.products.find({ $text: { $search: '"red book"' } });
db.products.find({ $text: { $search: '"awesome book"' } });
