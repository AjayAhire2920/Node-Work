const mysql = require('mysql');

var dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "registration",
});

dbConn.connect((err)=>{

    if(err) throw err;
    console.log("Database Connected Successfully!!!");

});

module.exports = dbConn;
  