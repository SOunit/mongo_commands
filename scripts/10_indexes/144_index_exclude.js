db.products.find({ $text: { $search: 'awesome -t-shirt' } }).pretty();
