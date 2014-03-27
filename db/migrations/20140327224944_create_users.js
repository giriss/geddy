var CreateUsers = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('name', 'string');
          t.column('age', 'int');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('User', def, callback);
  };

  this.down = function (next) {
    var callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.dropTable('User', callback);
  };
};

exports.CreateUsers = CreateUsers;
