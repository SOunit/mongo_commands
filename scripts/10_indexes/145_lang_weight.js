db.products.getIndexes();

db.products.dropIndex('title_text_description_text');

// weight affects the score
db.products.createIndex(
  { title: 'text', description: 'text' },
  { default_language: 'english', weights: { title: 1, description: 10 } }
);

db.products
  .find(
    {
      $text: { $search: 'red', $language: 'english', $caseSensitive: true },
    },
    { score: { $meta: 'textScore' } }
  )
  .pretty();
