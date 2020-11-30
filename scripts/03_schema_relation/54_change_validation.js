db.runCommand({
  collMod: 'posts',
  validator: {
    // new validator from old one
  },
});
