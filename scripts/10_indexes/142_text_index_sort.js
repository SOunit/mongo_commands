// no sort in result
db.products.find({ $text: { $search: 'awesome t-shirt' } }).pretty();

// sort by high hit
db.products
  .find(
    { $text: { $search: 'awesome t-shirt' } },
    { score: { $meta: 'textScore' } }
  )
  .sort({ score: { $meta: 'textScore' } })
  .pretty();
