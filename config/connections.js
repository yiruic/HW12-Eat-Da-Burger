var mysql      = require('mysql');
var connection = mysql.createConnection({
  port: 3000,
  host: 'localhost',
  user: 'root',
  password: 'yirui',
  database: 'burgers_db'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
