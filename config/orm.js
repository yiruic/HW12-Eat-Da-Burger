var connection = require('./connections.js');
// create the methods that will execute the necessary MySQL commands in the controllers.
// These are the methods you will need to use in order to retrieve and store data in your database.
var orm = {

    //`selectAll()`
    selectAll : function (req, res) {
      var queryString = "SELECT * FROM " + tableInput + ";";

      connection.query(queryString, function(err, result) {
        if (err) {
           throw err;
        } else {
         result ;
        }
        });
    } ,

    //`insertOne()`
    insertOne : function (req, res, cb) {} ,

    //`updateOne()`
    updateOne : function (req, res, cb) {}
}

//Export the ORM object in `module.exports`.
module.exports = orm ;
