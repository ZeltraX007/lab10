const mysql = require("mysql")
const con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "12345",
    database: "lab10",
    port: 3306
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connection created..!!");
});

module.exports.con = con;