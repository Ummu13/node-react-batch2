const mysql = require('mysql');

const conecction = mysql.createPool({
    host: 'localhost',
    user: "root",
    password: "root",
    database:""});

conecctionPool.getConnection(function(err){
    if (err){
        throw err;
    }
})
module.exports = { conecctionPool}