db.users.find({ phone: { $type: 'number' } }).count();
