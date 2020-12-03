db.movies.find().count();
db.movies.find().next();
db.movies.find().hasNext();
let dataCursor = db.movies.find();
dataCursor.hasNext();
dataCursor.foreEach((doc) => {
  printjson(doc);
});
