/* 
Setup the code to connect Node to MySQL.
Export the connection.
*/
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL); 
}
else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Webdev_2020!!',
        database: 'burgers_db'
    });
};

connection.connect();
module.exports = connection;