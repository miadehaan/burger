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

        // Heroku: ???
        // host: 'mna97msstjnkkp7h.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        // user: 'l5gc06n1hn8vxqrn',
        // password: 'ojl273mtrmraei90',
        // database: 'burgers_db'
    })
}

connection.connect();
module.exports = connection;