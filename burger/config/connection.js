// MYSQL connection set up, create and exporting
var mysql = require("mysql");

// **************   LOCALHOST connection ************** 
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.error("Connected to : " + connection.threadId);
});

module.exports = connection;