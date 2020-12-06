// create combine index
db.products.createIndex({ title: 'text', description: 'text' });

// get name to drop existing index
db.products.getIndexes();

db.products.dropIndex('description_text');

db.products.insertOne({ title: 'A ship!', description: 'some description' });

db.products.findOne({ $text: { $search: 'ship' } });
