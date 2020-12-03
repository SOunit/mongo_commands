db.users.updateMany({ isSporty: true }, { $unset: { phone: '' } });

// check result
db.users.find({ isSporty: true, phone: { $regex: /.*/ } }).count();
db.users.find({ isSporty: false, phone: { $regex: /.*/ } }).count();
