require('dotenv').config()
const mysql = require('mysql2');


const connectionPool = mysql.createPool({
    host : process.env.host,
    user : process.env.user,
    password : process.env.password,
    database : process.env.database
})

connectionPool.getConnection(function(err){
    if (err){
        throw err;
    }
})
module.exports = { connectionPool}