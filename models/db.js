// DB정보
const mysql = require('mysql');

require("dotenv").config();

// DB 정보
const db = mysql.createConnection({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
});


// DB 연결
db.connect(function (err) {
  if (err) throw err;
  console.log("DB Connected!");
});

module.exports = db;