// 53
// table drop
db.posts.drop();

// get one record
db.posts.findOne();

// validate
db.createCollection('posts', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['title', 'text', 'creator', 'comments'],
      properties: {
        title: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        text: {
          bsonType: 'string',
          description: 'must be a string and is required',
        },
        creator: {
          bsonType: 'objectId',
          description: 'must be an objectId and is required',
        },
        comments: {
          bsonType: 'array',
          description: 'must be an array and required',
          items: {
            bsonType: 'object',
            required: ['text', 'author'],
            properties: {
              text: {
                bsonType: 'string',
                description: 'must be a string and is required',
              },
            },
          },
        },
      },
    },
  },
});

// insert item
db.posts.insertOne({
  title: 'my fist post!',
  text: 'this is my first post',
  tags: ['new', 'tech'],
  comments: [{ text: 'i like this post!' }],
});

db.posts.find().pretty();
